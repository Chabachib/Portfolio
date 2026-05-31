import Image from 'next/image'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            <span className="line"><span>Nouh Taha CHEBCHOUB<em></em></span></span>
          </h1>
          <span className="role">AI Engineer &nbsp;·&nbsp; Data Scientist</span>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects <span className="arr">↗</span>
            </a>
            <a className="btn btn-ghost" href="/CV.pdf" download="Nouh_Taha_CHEBCHOUB_CV.pdf">
              Download CV <span className="arr">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait">
          <div className="glow-ring" />
          <div className="ring" />
          <Image src="/assets/portrait/portrait.jpeg" alt="Nouh Taha CHEBCHOUB" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </div>

    </header>
  )
}
