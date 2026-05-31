type Pill = { label: string; icon?: string }

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const skillCategories = [
  {
    title: 'ML & AI & CV',
    idx: '01',
    pills: [
      { label: 'PyTorch', icon: '/icons/pytorch.svg' },
      { label: 'TensorFlow', icon: '/icons/tensorflow.svg' },
      { label: 'Keras', icon: '/icons/keras.svg' },
      { label: 'Hugging Face', icon: '/icons/hugging_face.svg' },
      { label: 'YOLO', icon: '/icons/yolo.svg' },
      { label: 'OpenCV', icon: '/icons/opencv.svg' },
      { label: 'OCR', icon: '/icons/ocr.svg' },
      { label: 'Claude', icon: '/icons/claude.svg' },
      { label: 'Gemini', icon: '/icons/gemini.svg' },
    ] as Pill[],
  },
  {
    title: 'MLOps & Data Engineering',
    idx: '04',
    pills: [
      { label: 'MLflow', icon: '/icons/ml-flow.svg' },
      { label: 'Apache Airflow', icon: '/icons/apache-airflow.svg' },
      { label: 'FastAPI', icon: '/icons/fastapi.svg' },
      { label: 'Docker', icon: '/icons/docker.svg' },
      { label: 'Grafana', icon: '/icons/grafana.svg' },
      { label: 'Prometheus', icon: '/icons/prometheus.svg' },
    ] as Pill[],
  },
  {
    title: 'Databases & Storage',
    idx: '05',
    pills: [
      { label: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { label: 'MongoDB', icon: '/icons/mongodb.svg' },
      { label: 'InfluxDB', icon: '/icons/influxdb.svg' },
      { label: 'MySQL', icon: '/icons/mysql.svg' },
      { label: 'MinIO', icon: '/icons/minio.svg' },
      { label: 'Redis', icon: '/icons/redis.svg' },
    ] as Pill[],
  },
  {
    title: 'Simulation',
    idx: '06',
    pills: [
      { label: 'CARLA', icon: '/icons/carla.svg' },
      { label: 'SUMO', icon: '/icons/sumo.svg' },
    ] as Pill[],
  },
  {
    title: 'Web & Frontend',
    idx: '07',
    pills: [
      { label: 'React', icon: '/icons/react.svg' },
      { label: 'Next.js', icon: '/icons/nextjs.svg' },
      { label: 'JavaScript', icon: '/icons/javascript.svg' },
      { label: 'HTML5', icon: '/icons/html5.svg' },
      { label: 'CSS', icon: '/icons/css.svg' },
      { label: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ] as Pill[],
  },
  {
    title: 'Programming Languages',
    idx: '08',
    pills: [
      { label: 'Python', icon: '/icons/python.svg' },
      { label: 'SQL', icon: '/icons/sql.svg' },
    ] as Pill[],
  },
  {
    title: 'Cloud & Infrastructure',
    idx: '09',
    pills: [
      { label: 'GCP', icon: '/icons/google-cloud.svg' },
      { label: 'AWS', icon: '/icons/aws.svg' },
      { label: 'Oracle Cloud', icon: '/icons/oracle-cloud.svg' },
      { label: 'Huawei Cloud', icon: '/icons/huawei.svg' },
    ] as Pill[],
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
              The tools I <em>use for</em> work.
            </h2>
          </div>
        </div>

        <div className="skills-grid reveal-stagger">
          {skillCategories.map((cat) => (
            <div className="skill-cat" key={cat.idx}>
              <h4>{cat.title}</h4>
              <div className="pills">
                {cat.pills.map((pill) => (
                  <span className={`pill${pill.icon ? ' pill-has-icon' : ''}`} key={pill.label}>
                    {pill.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${BASE}${pill.icon}`}
                        alt={pill.label}
                        style={{ width: 24, height: 24, objectFit: 'contain', flexShrink: 0 }}
                      />
                    )}
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
