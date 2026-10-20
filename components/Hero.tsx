import Nav from './Nav'
import { Divider, Star8 } from './Ornaments'

const A = '/assets/moroccan'

// Cut-out portrait shown in front of the red arch. Set to e.g. '/assets/portrait/hero.webp' once the photo is ready.
const HERO_PHOTO: string | null = null

export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero-corner" src={`${A}/corner.webp`} alt="" width={840} height={888} />
      <div className="zellige-v hero-zellige-right" aria-hidden="true" />
      <div className="zellige-v hero-zellige-left" aria-hidden="true" />
      <img className="hero-lantern" src={`${A}/lantern.webp`} alt="" width={220} height={793} />

      <div className="hero-inner">
        <Nav />

        <div className="hero-intro">
          <h1 className="hero-name">
            <span className="green">Nouh Taha</span>
            <span className="red">Chebchoub</span>
          </h1>
          <Divider className="hero-divider" />

          <div className="hero-about" id="about">
            <h2 className="eyebrow red">About</h2>
            <p>
              I&apos;m an Applied AI / ML Engineer &amp; Data Scientist from Marrakech, building ML systems at the
              intersection of physics, data and real-world impact
              <span className="desktop-only"> — published in Sensors (MDPI) and Springer LNNS</span>.
            </p>
          </div>

          <div className="hero-actions">
            <a className="btn btn-green" href="#work">View my work</a>
            <a className="btn btn-outline-red" href="/docs/CV.pdf" download="Nouh_Taha_CHEBCHOUB_CV.pdf">Download CV</a>
          </div>

          <ul className="hero-stats">
            <li>2 Years</li>
            <li aria-hidden="true"><Star8 size={12} /></li>
            <li>2 Publications</li>
            <li aria-hidden="true"><Star8 size={12} /></li>
            <li>5+ Shipped systems</li>
          </ul>
        </div>

        <div className="hero-arch">
          <img className="hero-arch-img" src={`${A}/arch.webp`} alt="" width={974} height={1458} />
          {HERO_PHOTO && <img className="hero-photo" src={HERO_PHOTO} alt="Nouh Taha CHEBCHOUB" />}
        </div>

        <img className="hero-koutoubia" src={`${A}/koutoubia.webp`} alt="" width={400} height={583} />
      </div>

      {/* rooted behind the right zellige strip, growing in from the bottom-right edge */}
      <img className="hero-blossom" src={`${A}/blossom.webp`} alt="" width={940} height={1021} />
    </header>
  )
}
