export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-meta">
            <span className="pip" />
            <span>AVAILABLE</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>BASED IN MARRAKECH - MOROCCO</span>
          </div>
          <h1>
            <span className="line"><span>Nouh Taha CHEBCHOUB<em>.</em></span></span>
          </h1>
          <span className="role">AI Engineer &nbsp;·&nbsp; Data Scientist</span>
          <p className="tag">
            Physics-informed ML, LLM automation, and end-to-end MLOps — I bridge research
            and production, from EV digital twins with real-time telemetry to LLM pipelines
            that compress multi-day workflows into minutes. Published in{' '}
            <em style={{ color: 'var(--ink)', fontStyle: 'italic' }}>Sensors</em> &amp;{' '}
            <em style={{ color: 'var(--ink)', fontStyle: 'italic' }}>Springer</em>.
            Production engineer. Always both.
          </p>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.jpeg" alt="Chabachib" />
        </div>
      </div>

    </header>
  )
}
