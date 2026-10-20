import { Rosette } from './Ornaments'

const links = [
  { href: '#about', label: 'About', current: true },
  { href: '#work', label: 'Work' },
  { href: '#publications', label: 'Research', desktopOnly: true },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <a href="#top" className="nav-logo" aria-label="Back to top">
        <Rosette size={56} />
      </a>
      <ul>
        {links.map((l) => (
          <li key={l.href} className={l.desktopOnly ? 'desktop-only' : undefined}>
            <a href={l.href} aria-current={l.current ? 'true' : undefined}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
