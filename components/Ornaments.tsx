// Small geometric ornaments shared across sections (8-point stars, rosette, dividers, arch shapes).

function starPoints(cx: number, cy: number, R: number, r: number, n = 8, rot = 0) {
  const pts: string[] = []
  for (let k = 0; k < 2 * n; k++) {
    const a = rot + (Math.PI * k) / n
    const rad = k % 2 === 0 ? R : r
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

export function Rosette({ size = 56, className }: { size?: number; className?: string }) {
  const c = 28
  const R = 26.88
  const s = R * 1.44
  const o = c - R * 0.72
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x={o} y={o} width={s} height={s} fill="var(--green)" />
      <rect x={o} y={o} width={s} height={s} fill="var(--green)" transform={`rotate(45 ${c} ${c})`} />
      <polygon points={starPoints(c, c, R * 0.78, R * 0.6, 8, Math.PI / 8)} fill="var(--paper)" />
      <polygon points={starPoints(c, c, R * 0.6, R * 0.36, 8, Math.PI / 8)} fill="var(--red)" />
      <polygon points={starPoints(c, c, R * 0.22, R * 0.1, 4, Math.PI / 4)} fill="var(--paper)" />
    </svg>
  )
}

export function Star8({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <polygon points={starPoints(8, 8, 8, 4.6, 8, Math.PI / 8)} fill="currentColor" />
    </svg>
  )
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={`divider ${className ?? ''}`} aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-diamond" />
      <span className="divider-line" />
    </div>
  )
}

// Pointed arch for project images, normalised to the element's box (360×300 in the design).
export function ArchDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="arch-card" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.70993 A0.6,0.72 0 0 1 0.5,0 A0.6,0.72 0 0 1 1,0.70993 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function ArchOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 344 292" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0.75,292 L0.75,203.51 A206.4,206.4 0 0 1 172,0.75 A206.4,206.4 0 0 1 343.25,203.51 L343.25,292"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function Doorway({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 700 640" preserveAspectRatio="none" aria-hidden="true">
      <path
        className="door-outer"
        d="M2.78,640 L2.78,474.79 A434,434 0 0 1 350,1 A434,434 0 0 1 697.22,474.79 L697.22,640"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="door-inner"
        d="M14.68,640 L14.68,470.51 A419.12,419.12 0 0 1 350,13 A419.12,419.12 0 0 1 685.32,470.51 L685.32,640"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
