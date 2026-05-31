type TimelineItem = {
  when: string
  role: string
  where: string
  desc: string
}

const experience: TimelineItem[] = [
  {
    when: 'July 2025 — May 2026',
    role: 'AI Engineer',
    where: 'Variable Data Co. · Remote',
    desc: '',
  },
  {
    when: 'Feb 2025 — July 2025',
    role: 'Data Scientist Intern',
    where: 'DHBW Friedrichshafen · Germany',
    desc: '',
  },
  {
    when: 'Nov 2024 — March 2025',
    role: 'Machine Learning Engineer Intern',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: '',
  },
  {
    when: 'July 2024 — October 2024',
    role: 'Software Engineer Intern',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: '',
  },
]

const education: TimelineItem[] = [
  {
    when: '2023 — 2025',
    role: 'M.Sc. Data Science',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: '',
  },
  {
    when: '2020 — 2023',
    role: 'B.Sc. Mathematics & Computer Science',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: '',
  },
]

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="tl-item" key={item.when}>
          <div className="when">{item.when}</div>
          <h4>{item.role}</h4>
          <div className="where">{item.where}</div>
          {item.desc && <p>{item.desc}</p>}
        </div>
      ))}
    </div>
  )
}

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">04 — Journey</span>
            <h2 style={{ marginTop: 18 }}>
              What I&apos;ve <em>studied</em> & where I&apos;ve <em>worked</em>.
            </h2>
          </div>
        </div>

        <div className="journey-grid reveal">
          <div className="journey-col">
            <div className="journey-col-title">Work Experience</div>
            <Timeline items={experience} />
          </div>
          <div className="journey-col">
            <div className="journey-col-title">Education</div>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}
