import { ArchOutline, Divider } from './Ornaments'

type Project = {
  tag: string
  title: string
  desc: string
  img: string
  paper?: string
  code?: string
}

const projects: Project[] = [
  {
    tag: 'Digital Twin',
    title: 'TwinFlux — EV Energy Intelligence',
    desc: 'Physics-calibrated EV simulation (SUMO + HVAC) at ±0.6% Wh/km, with an AutoML + PINN state-of-charge API and MLflow tracking.',
    img: '/assets/twinflux.jpg',
    code: 'https://github.com/Chabachib/Twin-Flux.git',
  },
  {
    tag: 'Research · Sensors (MDPI)',
    title: 'EEG Emotion Detection',
    desc: 'CNN & RNN (GRU, Bi-LSTM) models on the DEAP dataset reaching 91–94% accuracy in valence/arousal classification.',
    img: '/assets/eeg.jpg',
    paper: 'https://doi.org/10.3390/s25061827',
    code: 'https://github.com/Chabachib/EEG-Based-Emotion-Detection.git',
  },
  {
    tag: 'Audio · ML',
    title: 'Moroccan Music Genre Classifier',
    desc: 'Gnawa, Chaabi, Andalusian, Raï, Imazighn, Rap & Pop — an LSTM on MFCC features at 95% test accuracy, served via Flask + React.',
    img: '/assets/moroccan-music.jpg',
    code: 'https://github.com/Chabachib/Moroccan-Music-Classification.git',
  },
  {
    tag: 'PINN · MLOps',
    title: 'PINN Battery SoC Estimator',
    desc: 'The Coulomb Counting ODE embedded directly in the loss — under 2% state-of-charge error with guaranteed physical consistency.',
    img: '/assets/emule.jpg',
  },
  {
    tag: 'CV · GAN',
    title: 'GAN-Sim — Behavioural Modelling',
    desc: 'Conditional GAN on 5,000+ annotated frames generating synthetic agent trajectories — 93% target-detection accuracy.',
    img: '/assets/csgo.jpg',
  },
  {
    tag: 'Research · Springer LNNS',
    title: 'AR for Innovative Learning',
    desc: 'Augmented-reality applications that foster student engagement and active learning in STEM environments.',
    img: '/assets/ar-garden.jpg',
    paper: 'https://doi.org/10.1007/978-3-031-94623-3_37',
  },
]

export default function Projects() {
  return (
    <section className="work" id="work">
      {/* olive branch tucked under the zellige band, hanging into the section */}
      <img className="work-olive" src="/assets/moroccan/olive.webp" alt="" width={800} height={510} loading="lazy" />
      <div className="zellige-band" aria-hidden="true" />

      <div className="stage work-stage">
        <div className="section-head reveal">
          <span className="eyebrow red">02 · Selected work</span>
          <h2 className="section-title green">Things I&apos;ve built &amp; published</h2>
          <Divider className="accent-red" />
        </div>

        <div className="work-grid reveal-stagger">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <div className="card-media">
                <img src={p.img} alt={p.title} loading="lazy" />
                <ArchOutline className="card-outline" />
              </div>
              <span className="eyebrow red small">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {(p.paper || p.code) && (
                <div className="card-links">
                  {p.paper && <a href={p.paper} target="_blank" rel="noopener noreferrer">Read paper →</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">View code →</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
