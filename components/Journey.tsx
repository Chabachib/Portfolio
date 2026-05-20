const timeline = [
  {
    when: 'July 2025 — Present',
    role: 'AI Engineer',
    where: 'Variable Data Co. · Remote',
    desc: 'Designed an end-to-end LLM-based engine to extract and cross-compare clauses across Medical, Motor and General insurance quotations. Reduced report turnaround from 2+ days to under 30 minutes via optimised prompt engineering and structured-output pipelines, maintaining human-level accuracy.',
    tags: ['LLMs', 'Structured Outputs', 'FastAPI', 'Prompt Eng.'],
  },
  {
    when: 'Feb 2025 — July 2025',
    role: 'Data Scientist Intern',
    where: 'DHBW Friedrichshafen · Germany',
    desc: 'Deployed a Digital Twin for an EV in CARLA, integrating real-time telemetry at 10k+ data points/sec with <50ms latency for predictive analytics and proactive maintenance. Architected a PINN for Battery SoC estimation by embedding the Coulomb Counting ODE into the loss function — <2% prediction error with guaranteed physical consistency.',
    tags: ['PINNs', 'CARLA', 'PyTorch', 'Digital Twin', 'MLflow'],
  },
  {
    when: '2023 — 2025',
    role: 'M.Sc. Data Science',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: 'Specialisation in machine learning, statistics and applied mathematics. Research on EEG-based emotion detection using hybrid CNN/RNN architectures — published in Sensors, MDPI (91–94% accuracy on DEAP dataset).',
    tags: ['Research', 'Deep Learning', 'EEG', 'Published'],
  },
  {
    when: '2020 — 2023',
    role: 'B.Sc. Mathematics & Computer Science',
    where: 'Cadi Ayyad University, Faculty of Science Semlalia · Marrakech',
    desc: 'Foundations in mathematics, algorithms, and computer science. Co-authored research on augmented reality for innovative learning, published in Springer LNNS.',
    tags: ['Mathematics', 'CS Fundamentals', 'AR Research', 'Springer'],
  },
]

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
          <p>
            From mathematics to physics-informed AI — the chapters that shaped
            how I think about building ML systems that are both rigorous and useful.
          </p>
        </div>

        <div className="timeline reveal-stagger">
          {timeline.map((item) => (
            <div className="tl-item" key={item.when}>
              <div className="when">{item.when}</div>
              <h4>{item.role}</h4>
              <div className="where">{item.where}</div>
              <p>{item.desc}</p>
              <div className="tags">
                {item.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
