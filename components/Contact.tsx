import { Doorway, Rosette, Star8 } from './Ornaments'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="stage contact-stage">
        <div className="doorway reveal">
          <Doorway className="doorway-arch" />
          {/* olive branches rooted at the sill, climbing the doorway's jambs */}
          <img className="door-branch left" src="/assets/moroccan/olive-climb.webp" alt="" width={560} height={1354} loading="lazy" />
          <img className="door-branch right" src="/assets/moroccan/olive-climb-r.webp" alt="" width={560} height={1354} loading="lazy" />
          <div className="doorway-sill" aria-hidden="true" />

          <div className="doorway-content">
            <Rosette size={56} />
            <span className="eyebrow red">04 · Contact</span>
            <h2 className="section-title green">
              Salam — <em>let&apos;s talk.</em>
            </h2>
            <p>
              Whether it&apos;s a job opportunity, a research idea, or just a question — drop me a message
              and I&apos;ll get back to you.
            </p>
            <a className="btn btn-green" href="mailto:nouhtahachebchoub@gmail.com">nouhtahachebchoub@gmail.com</a>
            <div className="contact-links">
              <a href="https://linkedin.com/in/nouh-taha-chebchoub" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <Star8 size={10} />
              <a href="https://github.com/Chabachib" target="_blank" rel="noopener noreferrer">GitHub</a>
              <Star8 size={10} />
              <a href="/docs/CV.pdf" download="Nouh_Taha_CHEBCHOUB_CV.pdf">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
