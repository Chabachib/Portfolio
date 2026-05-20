export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="wordmark">Chebchoub.</div>
        <div className="foot-grid">
          <div className="foot-mark">
            <div className="square">N</div>
            <div>
              Nouh Taha CHEBCHOUB · AI Engineer
              <br />
              <span style={{ color: 'var(--ink-3)' }}>Crafted in 2025 · v1.0</span>
            </div>
          </div>
          <div className="foot-links">
            <a href="https://linkedin.com/in/nouh-taha-chebchoub" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Chabachib" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:nouhtahachebchoub@gmail.com">Email</a>
            <a href="/CV.pdf" download="Nouh_Taha_CHEBCHOUB_CV.pdf">CV</a>
          </div>
          <div className="foot-meta">
            © 2025 · All rights reserved.
            <br />
            Built with Claude.
          </div>
        </div>
      </div>
    </footer>
  )
}
