import { Divider, Star8 } from './Ornaments'

type TimelineItem = {
  when: string
  role: string
  where: string
}

const experience: TimelineItem[] = [
  { when: 'Jul 2025 — May 2026', role: 'AI Engineer', where: 'Variable Data Co. · Remote' },
  { when: 'Feb 2025 — Jul 2025', role: 'Data Scientist Intern', where: 'DHBW Friedrichshafen · Germany' },
  { when: 'Nov 2024 — Mar 2025', role: 'Machine Learning Engineer Intern', where: 'Cadi Ayyad University, FS Semlalia · Marrakech' },
  { when: 'Jul 2024 — Oct 2024', role: 'Software Engineer Intern', where: 'Cadi Ayyad University, FS Semlalia · Marrakech' },
]

const education: TimelineItem[] = [
  { when: '2023 — 2025', role: 'M.Sc. Data Science', where: 'Cadi Ayyad University, FS Semlalia · Marrakech' },
  { when: '2020 — 2023', role: 'B.Sc. Mathematics & Computer Science', where: 'Cadi Ayyad University, FS Semlalia · Marrakech' },
]

const publications = [
  { title: 'EEG-Based Emotion Detection — Sensors (MDPI), 2025', doi: '10.3390/s25061827' },
  { title: 'Augmented Reality for Innovative Learning — Springer LNNS', doi: '10.1007/978-3-031-94623-3_37' },
]

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={item.when}>
          <Star8 className="timeline-star" />
          <div>
            <span className="eyebrow gold small">{item.when}</span>
            <h4>{item.role}</h4>
            <p>{item.where}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="zellige-band" aria-hidden="true" />

      <div className="stage journey-stage">
        <div className="section-head reveal">
          <span className="eyebrow gold">03 · Journey</span>
          <h2 className="section-title cream">Where I&apos;ve worked &amp; studied</h2>
          <Divider className="accent-gold" />
        </div>

        <div className="journey-grid reveal">
          <div className="journey-col">
            <h3 className="eyebrow gold col-title">Experience</h3>
            <Timeline items={experience} />
          </div>
          <div className="journey-col">
            <h3 className="eyebrow gold col-title">Education</h3>
            <Timeline items={education} />
            <div className="publications" id="publications">
              <h3 className="eyebrow gold small">Publications</h3>
              {publications.map((p) => (
                <a key={p.doi} href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer">
                  <span className="pub-title">{p.title}</span>
                  <span className="pub-doi">doi.org/{p.doi}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <a className="btn btn-outline-gold reveal" href="/docs/CV.pdf" download="Nouh_Taha_CHEBCHOUB_CV.pdf">Download full CV</a>
      </div>
    </section>
  )
}
