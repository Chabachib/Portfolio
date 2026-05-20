'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // cursor glow
    const cg = document.getElementById('cursorGlow') as HTMLElement | null
    if (cg) {
      let mx = window.innerWidth / 2
      let my = window.innerHeight / 2
      let cx = mx
      let cy = my

      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
      window.addEventListener('mousemove', onMove)

      let rafId: number
      const loop = () => {
        cx += (mx - cx) * 0.08
        cy += (my - cy) * 0.08
        cg.style.left = cx + 'px'
        cg.style.top = cy + 'px'
        rafId = requestAnimationFrame(loop)
      }
      loop()

      return () => {
        window.removeEventListener('mousemove', onMove)
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  useEffect(() => {
    // project card mouse-follow radial gradient
    const cards = document.querySelectorAll<HTMLElement>('.proj')
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = []

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
      }
      card.addEventListener('mousemove', fn)
      handlers.push({ el: card, fn })
    })

    return () => handlers.forEach(({ el, fn }) => el.removeEventListener('mousemove', fn))
  }, [])

  useEffect(() => {
    // intersection reveal
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    // count-up animation
    const ioCount = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return
        const el = en.target as HTMLElement
        const target = Number(el.dataset.count)
        const valEl = el.querySelector<HTMLElement>('.val')
        if (!valEl) return
        const dur = 1400
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          valEl.textContent = Math.round(target * eased).toLocaleString()
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        ioCount.unobserve(el)
      }),
      { threshold: 0.4 }
    )
    document.querySelectorAll('[data-count]').forEach((el) => ioCount.observe(el))
    return () => ioCount.disconnect()
  }, [])

  return null
}
