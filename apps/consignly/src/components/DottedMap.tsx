/* Dotted world map — a decorative dot-matrix rendering of the continents,
   recreated as inline SVG (the source template used a PNG asset; per the
   replication rules no assets are copied). The shape is approximated with
   a few elliptical landmasses sampled on a grid. Pure render, aria-hidden. */

interface Blob {
  cx: number
  cy: number
  rx: number
  ry: number
}

const LAND_BLOBS: Blob[] = [
  // North America
  { cx: 260, cy: 170, rx: 130, ry: 100 },
  { cx: 190, cy: 250, rx: 70, ry: 60 },
  // South America
  { cx: 330, cy: 400, rx: 55, ry: 110 },
  // Europe
  { cx: 620, cy: 160, rx: 60, ry: 55 },
  // Africa
  { cx: 620, cy: 330, rx: 70, ry: 110 },
  // Asia
  { cx: 790, cy: 150, rx: 170, ry: 110 },
  { cx: 950, cy: 250, rx: 80, ry: 60 },
  { cx: 1050, cy: 180, rx: 55, ry: 70 },
  // Australia
  { cx: 980, cy: 430, rx: 60, ry: 45 },
]

const STEP = 26

interface Dot {
  x: number
  y: number
}

function buildDots(): Dot[] {
  const dots: Dot[] = []
  for (let y = 20; y < 480; y += STEP) {
    for (let x = 20; x < 1180; x += STEP) {
      let score = 0
      for (const blob of LAND_BLOBS) {
        const dx = (x - blob.cx) / blob.rx
        const dy = (y - blob.cy) / blob.ry
        score += Math.exp(-(dx * dx + dy * dy) * 1.6)
      }
      if (score > 0.42) {
        dots.push({ x, y })
      }
    }
  }
  return dots
}

const DOTS = buildDots()

export function DottedMap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 500" className={className} aria-hidden="true" focusable="false">
      {DOTS.map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="3.2" fill="currentColor" />
      ))}
    </svg>
  )
}
