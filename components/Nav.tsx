export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand">
        <span className="dot" />
        NTC / &apos;26
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Stack</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="cta" href="#contact">Let&apos;s talk →</a>
    </nav>
  )
}
