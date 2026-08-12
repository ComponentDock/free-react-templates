import { Play } from 'lucide-react'
import { HERO_HEADLINE, HERO_PARAGRAPH, WATCH_VIDEO_LABEL } from '../data'

/* Hero recreated from the source's home banner: a full-bleed dark purple
   section with a subtle geometric grid pattern, isometric game artwork on
   the left (inline SVG — no assets copied), and a headline + pulsing
   circular video-play button on the right. */

function GameArtwork() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="mx-auto w-full max-w-lg"
      role="img"
      aria-label="Isometric game art"
    >
      {/* Ground platform */}
      <polygon
        points="240,360 440,260 240,160 40,260"
        fill="#2c2172"
        stroke="#3fcaff"
        strokeOpacity="0.5"
      />
      <polygon points="240,360 440,260 440,300 240,400 40,300 40,260" fill="#342b7e" />
      {/* Tower core */}
      <polygon
        points="240,100 320,140 320,240 240,280 160,240 160,140"
        fill="#231a60"
        stroke="#3fcaff"
      />
      <polygon points="320,140 400,180 400,280 320,240" fill="#2c2172" stroke="#a4ffb0" />
      {/* Tower front face */}
      <polygon points="240,100 320,140 240,180 160,140" fill="#3b328b" stroke="#3fcaff" />
      {/* Windows */}
      <rect x="210" y="150" width="16" height="24" fill="#3fcaff" opacity="0.9" />
      <rect x="238" y="160" width="16" height="24" fill="#a4ffb0" opacity="0.9" />
      <rect x="266" y="150" width="16" height="24" fill="#3fcaff" opacity="0.9" />
      {/* Floating cubes */}
      <g stroke="#3fcaff" strokeWidth="2" fill="none">
        <polygon points="90,160 120,175 120,205 90,190 60,205 60,175" />
        <polygon points="120,175 150,190 150,220 120,205" />
        <polygon points="90,190 120,205 120,235 90,220 60,235 60,205" />
      </g>
      <g stroke="#a4ffb0" strokeWidth="2" fill="none" opacity="0.8">
        <polygon points="380,120 410,135 410,165 380,150 350,165 350,135" />
        <polygon points="410,135 440,150 440,180 410,165" />
      </g>
      {/* Glow dots */}
      <circle cx="300" cy="300" r="4" fill="#3fcaff" opacity="0.8" />
      <circle cx="180" cy="310" r="3" fill="#a4ffb0" opacity="0.7" />
      <circle cx="360" cy="210" r="3" fill="#3fcaff" opacity="0.6" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="bg-purple-deep pb-24 pt-40 [background-image:linear-gradient(rgba(63,202,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(63,202,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <GameArtwork />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-5xl font-bold leading-[1.2] text-white lg:text-[60px] lg:leading-[72px]">
            {HERO_HEADLINE}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">{HERO_PARAGRAPH}</p>
          <div className="mt-10 flex items-center gap-6">
            <button
              type="button"
              aria-label="Play video"
              className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand bg-purple-deep/60 text-brand transition-colors hover:bg-brand hover:text-purple-deep"
            >
              <span
                className="absolute inset-0 -z-10 animate-ping rounded-full border-2 border-brand/60"
                aria-hidden="true"
              />
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </button>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white">
              {WATCH_VIDEO_LABEL}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
