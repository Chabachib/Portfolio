'use client'

import Image from 'next/image'

type Project = {
  badge: string
  thumbStyle?: React.CSSProperties
  imgSrc?: string
  title: string
  desc: string
  demoHref: string
  codeHref?: string
  num: string
}

const projects: Project[] = [
  {
    badge: 'DIGITAL TWIN',
    num: '01',
    thumbStyle: {
      background: 'radial-gradient(circle at 70% 30%, oklch(0.72 0.18 260 / 0.20), transparent 50%), repeating-linear-gradient(45deg, oklch(0.18 0.014 250) 0 14px, oklch(0.16 0.014 250) 14px 28px)',
    },
    imgSrc: '/assets/twinflux.jpg',
    title: 'TwinFlux — EV Energy Intelligence',
    desc: 'Physics-calibrated EV simulation (SUMO + HVAC) achieving ±0.6% Wh/km across 5 vehicle profiles. AutoML + PINN SoC prediction API with real-time MLflow tracking.',
    demoHref: '#',
    codeHref: 'https://github.com/Chabachib/Twin-Flux.git',
  },
  {
    badge: 'RESEARCH · PUBLISHED',
    num: '02',
    thumbStyle: {
      background: 'repeating-linear-gradient(90deg, oklch(0.18 0.014 250) 0 1px, transparent 1px 8px), oklch(0.16 0.014 250)',
    },
    imgSrc: '/assets/eeg.jpg',
    title: 'EEG Emotion Detection',
    desc: 'CNN & RNN (GRU, Bi-LSTM) models on the DEAP dataset reaching 91–94% accuracy in valence/arousal classification. Published in Sensors, MDPI.',
    demoHref: 'https://doi.org/10.3390/s25061827',
    codeHref: 'https://github.com/Chabachib/EEG-Based-Emotion-Detection.git',
  },
  {
    badge: 'PINN · MLOps',
    num: '03',
    thumbStyle: {
      background: 'radial-gradient(circle at 20% 60%, oklch(0.78 0.16 235 / 0.18), transparent 50%), repeating-linear-gradient(135deg, oklch(0.18 0.014 250) 0 12px, oklch(0.16 0.014 250) 12px 24px)',
    },
    imgSrc: '/assets/emule.jpg',
    title: 'PINN Battery SoC Estimator',
    desc: 'Physics-Informed Neural Network for EV battery State-of-Charge estimation, embedding the Coulomb Counting ODE directly into the loss function — <2% prediction error with guaranteed physical consistency.',
    demoHref: '#',
  },
  {
    badge: 'CV · GAN',
    num: '04',
    thumbStyle: {
      background: 'radial-gradient(circle at 20% 30%, oklch(0.78 0.16 235 / 0.18), transparent 50%), repeating-linear-gradient(135deg, oklch(0.18 0.014 250) 0 12px, oklch(0.16 0.014 250) 12px 24px)',
    },
    imgSrc: '/assets/csgo.jpg',
    title: 'GAN-Sim — Behavioural Modelling',
    desc: 'Conditional GAN trained on 5,000+ annotated frames to generate synthetic agent trajectories for RL environment augmentation — 93% target-detection accuracy and sim-to-real transfer.',
    demoHref: '#',
  },
  {
    badge: 'AUDIO · ML',
    num: '05',
    thumbStyle: {
      background: 'radial-gradient(circle at 60% 40%, oklch(0.72 0.18 260 / 0.22), transparent 55%), repeating-linear-gradient(60deg, oklch(0.18 0.014 250) 0 10px, oklch(0.16 0.014 250) 10px 20px)',
    },
    imgSrc: '/assets/moroccan-music.jpg',
    title: 'Moroccan Music Genre Classifier',
    desc: 'Full-stack AI system classifying 7 Moroccan genres (Gnawa, Chaabi, Andalusian, Raï, Imazighn, Rap, Pop) from audio clips. LSTM on MFCC features, 95% test accuracy on 5,000+ clips, containerised Flask API with React frontend.',
    demoHref: '#',
    codeHref: 'https://github.com/Chabachib/Moroccan-Music-Classification.git',
  },
  {
    badge: 'SPRINGER · AR',
    num: '06',
    thumbStyle: {
      background: 'repeating-linear-gradient(180deg, oklch(0.18 0.014 250) 0 18px, oklch(0.16 0.014 250) 18px 32px)',
    },
    imgSrc: '/assets/ar-garden.jpg',
    title: 'AR for Innovative Learning',
    desc: 'Research on augmented-reality applications fostering student engagement and active learning in STEM environments. Published in Springer LNNS.',
    demoHref: 'https://doi.org/10.1007/978-3-031-94623-3_37',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">03 — Selected work</span>
            <h2 style={{ marginTop: 18 }}>
              Things I&apos;ve <em>built</em>, published &amp; shipped.
            </h2>
          </div>
        </div>

        <div className="projects-grid reveal-stagger">
          {projects.map((p) => (
            <article
              key={p.num}
              className="proj"
            >
              <div className="thumb" style={p.thumbStyle}>
                <span className="badge">{p.badge}</span>
                {p.imgSrc
                  ? <Image src={p.imgSrc} alt={p.title} fill style={{ objectFit: 'cover' }} />
                  : <span className="ph"><span>[ THUMB {p.num} ]</span></span>
                }
              </div>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="meta">
                <div className="links">
                  {p.demoHref !== '#' && <a className="proj-paper-btn" href={p.demoHref} target="_blank" rel="noopener noreferrer">Paper</a>}
                </div>
                {p.codeHref && <a className="proj-code-btn" href={p.codeHref} target="_blank" rel="noopener noreferrer">Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
