const skillCategories = [
  {
    title: 'Machine Learning & AI',
    idx: '01',
    pills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Hugging Face',
      'GANs',
      'PINNs',
      'AutoML',
      'XAI',
    ],
  },
  {
    title: 'Deep Learning',
    idx: '02',
    pills: [
      'CNNs',
      'RNNs',
      'BiLSTM',
      'GRU',
      'NLP',
    ],
  },
  {
    title: 'Computer Vision',
    idx: '03',
    pills: [
      'YOLO',
      'OpenCV',
      'Object Detection',
      'Image Segmentation',
      'OCR',
    ],
  },
  {
    title: 'MLOps & Data Engineering',
    idx: '04',
    pills: [
      'MLflow',
      'Apache Airflow',
      'FastAPI',
      'Docker',
      'Grafana',
    ],
  },
  {
    title: 'Databases & Storage',
    idx: '05',
    pills: [
      'PostgreSQL',
      'MongoDB',
      'InfluxDB',
      'MySQL',
      'MinIO',
    ],
  },
  {
    title: 'Simulation & Optimization',
    idx: '06',
    pills: [
      'CARLA',
      'SUMO',
      'HVAC Modeling',
      'Optuna',
    ],
  },
  {
    title: 'Programming Languages',
    idx: '07',
    pills: [
      'Python',
      'SQL',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    idx: '08',
    pills: [
      'GCP',
      'Huawei Cloud',
      'Oracle Cloud',
    ],
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
