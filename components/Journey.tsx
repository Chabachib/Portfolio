type TimelineItem = {
  when: string
  role: string
  where: string
  desc: string
  tags?: string[]
}

const experience: TimelineItem[] = [
  {
    when: 'July 2025 — May 2026',
    role: 'AI Engineer',
    where: 'Variable Data Co. · Remote',
    desc: 'Designed an end-to-end LLM-based engine to extract and cross-compare clauses across Medical, Motor and General insurance quotations. Reduced report turnaround from 2+ days to under 15 minutes via optimised prompt engineering and structured-output pipelines, maintaining human-level accuracy.',
  },
  {
    when: 'Feb 2025 — July 2025',
    role: 'Data Scientist Intern',
    where: 'DHBW Friedrichshafen · Germany',
    desc: 'Deployed a Digital Twin for an Electrical Vehicle in CARLA Simulation, integrating real-time telemetry at 10k+ data points/sec with <50ms latency for predictive analytics and proactive maintenance. Architected a PINN for Battery SoC estimation by embedding the Coulomb Counting ODE into the loss function — <2% prediction error with guaranteed physical consistency.',
  },
  {
    when: 'Nov 2024 — March 2025',
    role: 'Machine Learning Engineer Intern',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: 'Developed and evaluated hybrid CNN and RNN (GRU, Bi-LSTM) architectures for EEG-based emotion recognition on the DEAP dataset (32 participants, 1,280 trials), reaching 91–94% accuracy in valence and arousal classification. Findings published in Sensors, MDPI.',
  },
  {
    when: 'July 2024 — October 2024',
    role: 'Software Engineer Intern',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: 'Designed and developed augmented reality experiences aimed at fostering student engagement and active learning in STEM environments. Co-authored research on the pedagogical impact of Augmented Reality applications, published in Springer LNNS.',
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
          <p>{item.desc}</p>
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
              A short, <em>opinionated</em> timeline.
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
