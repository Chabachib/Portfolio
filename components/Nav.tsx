'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`nav${open ? ' is-open' : ''}`}>
      <ul>
        {links.map((l) => (
          <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
        ))}
      </ul>
      <a className="cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk →</a>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      <div className="nav-drawer">
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
          <li><a className="drawer-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk →</a></li>
        </ul>
      </div>
    </nav>
  )
}
