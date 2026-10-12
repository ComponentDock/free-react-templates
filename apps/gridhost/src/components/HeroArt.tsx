import { AnchorUp } from './AnchorUp'

/**
 * The decorative isometric illustration that fills the hero's right column: two
 * stacked racks, a cloud, a dotted floor and two small figures, drawn in the
 * brand's navy, mint and coral accents.
 */
export function HeroArt() {
  return (
    <svg
      role="img"
      aria-label="Isometric illustration of two server racks beside a cloud"
      viewBox="0 0 559 671"
      className="h-auto w-full max-w-[559px]"
      fill="none"
    >
      <defs>
        <linearGradient id="gridhost-rack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ac8d8" />
          <stop offset="100%" stopColor="#1f3f92" />
        </linearGradient>
      </defs>

      <ellipse cx="279" cy="596" rx="238" ry="46" fill="#0b1d4d" opacity="0.55" />
      <circle cx="120" cy="120" r="8" fill="#eb566c" opacity="0.85" />
      <circle cx="452" cy="96" r="6" fill="#fce0d8" opacity="0.9" />

      <g opacity="0.35" stroke="#8ba4b1" strokeWidth="1">
        <path d="M40 640h480M40 600h480M40 560h480" strokeDasharray="4 12" />
      </g>

      <path d="M279 92a96 96 0 0 1 92 68 60 60 0 0 1 8 118 60 60 0 0 1-200 0 60 60 0 0 1 8-118 96 96 0 0 1 92-68z" fill="#dfeaf6" />
      <path d="M279 92a96 96 0 0 1 92 68 60 60 0 0 0-92-12 60 60 0 0 0-92 12 96 96 0 0 1 92-68z" fill="#ffffff" />

      <g transform="translate(150 262)">
        <path d="M0 40 120 0l120 40v200l-120 40-120-40z" fill="url(#gridhost-rack)" />
        <path d="M0 40 120 0v280L0 240z" fill="#2a5cc4" />
        <path d="M240 40 120 0v280l120-40z" fill="#173a86" />
        <path d="M24 84h180M24 132h180M24 180h180" stroke="#dfeaf6" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
        <circle cx="60" cy="84" r="7" fill="#4fd6a8" />
        <circle cx="60" cy="132" r="7" fill="#fce0d8" />
        <circle cx="60" cy="180" r="7" fill="#eb566c" />
      </g>

      <g transform="translate(236 386)">
        <path d="M0 26 78 0l78 26v128l-78 26-78-26z" fill="#2f6fd0" />
        <path d="M0 26 78 0v154L0 180z" fill="#4a90e2" />
        <path d="M156 26 78 0v154l78-26z" fill="#1d4a9c" />
        <path d="M20 60h116M20 96h116" stroke="#dfeaf6" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      </g>

      <g transform="translate(84 500)">
        <circle cx="0" cy="0" r="16" fill="#fce0d8" />
        <path d="M0 16v48" stroke="#dfeaf6" strokeWidth="9" strokeLinecap="round" />
        <path d="M0 62l-18 30M0 62l18 30" stroke="#dfeaf6" strokeWidth="9" strokeLinecap="round" />
      </g>

      <g transform="translate(470 512)">
        <circle cx="0" cy="0" r="14" fill="#ff6b81" />
        <path d="M0 14v42" stroke="#dfeaf6" strokeWidth="8" strokeLinecap="round" />
        <path d="M0 56l-16 26M0 56l16 26" stroke="#dfeaf6" strokeWidth="8" strokeLinecap="round" />
      </g>

      <path d="M270 300v300" stroke="#3f5c9c" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.5" />
      <AnchorUp />
    </svg>
  )
}
