import ContactForm from './ContactForm'

const channels = [
  { net: 'EMAIL', val: 'nouhtahachebchoub@gmail.com', href: 'mailto:nouhtahachebchoub@gmail.com' },
  { net: 'LINKEDIN', val: 'linkedin.com/in/nouh-taha-chebchoub', href: 'https://linkedin.com/in/nouh-taha-chebchoub' },
  { net: 'GITHUB', val: 'github.com/Chabachib', href: 'https://github.com/Chabachib' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact">
        <div className="contact-side reveal">
          <span className="eyebrow">06 — Contact</span>
          <h3 style={{ marginTop: 18 }}>
            Let&apos;s build something <em>worth shipping</em>.
          </h3>
          <p>
            Open to international opportunities — full-time roles, research
            collaborations, and selected freelance projects. Reach out in
            whatever channel works for you.
          </p>
          <div className="channels">
            {channels.map((c) => (
              <a
                className="channel"
                href={c.href}
                key={c.net}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="lbl">
                  <span className="net">{c.net}</span>
                  <span className="val">{c.val}</span>
                </div>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
