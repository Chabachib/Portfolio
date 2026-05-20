const skillCategories = [
  {
    title: 'ML / AI',
    idx: '01',
    pills: ['PyTorch', 'TensorFlow', 'Keras', 'HuggingFace', 'PINNs', 'GANs', 'NLP', 'XAI'],
  },
  {
    title: 'Computer Vision',
    idx: '02',
    pills: ['YOLO', 'OpenCV', 'CNNs', 'RNNs', 'Bi-LSTM', 'GRU'],
  },
  {
    title: 'MLOps & Data',
    idx: '03',
    pills: ['MLflow', 'Airflow', 'FastAPI', 'Docker', 'MinIO', 'Grafana'],
  },
  {
    title: 'Databases',
    idx: '04',
    pills: ['PostgreSQL', 'MongoDB', 'InfluxDB', 'MySQL', 'MinIO'],
  },
  {
    title: 'Simulation',
    idx: '05',
    pills: ['CARLA', 'SUMO', 'HVAC Modelling', 'Optuna', 'AutoML'],
  },
  {
    title: 'Languages',
    idx: '06',
    pills: ['Python', 'SQL'],
  },
  {
    title: 'Cloud',
    idx: '07',
    pills: ['GCP', 'Huawei Cloud', 'Oracle Cloud'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">02 — Stack</span>
            <h2 style={{ marginTop: 18 }}>
              The tools I <em>reach for</em> daily.
            </h2>
          </div>
          <p>
            A curated stack, not a laundry list. Tools I know well enough to know
            what&apos;s broken about them — and exactly when to use them.
          </p>
        </div>

        <div className="skills-grid reveal-stagger">
          {skillCategories.map((cat) => (
            <div className="skill-cat" key={cat.idx}>
              <h4>
                {cat.title} <span className="idx">{cat.idx}</span>
              </h4>
              <div className="pills">
                {cat.pills.map((pill) => (
                  <span className="pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
