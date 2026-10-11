import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'

interface Slide {
  id: string
  eyebrow: string
  heading: string
  cta: string
  href: string
}

const SLIDES: Slide[] = [
  {
    id: 'starting',
    eyebrow: 'Starting at only $2.80/month',
    heading: 'Welcome to the best hosting company',
    cta: 'Get started now',
    href: '#pricing',
  },
  {
    id: 'domain',
    eyebrow: 'Free domain for the first year',
    heading: 'Fast, secure cloud hosting for every site',
    cta: 'Compare plans',
    href: '#pricing',
  },
]

const ROTATE_MS = 6000

/** Isometric server-city illustration standing in for the design's hero art. */
function HeroArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 470"
      className="mx-auto h-auto w-full max-w-[520px] drop-shadow-[0_18px_40px_rgba(11,5,47,0.55)]"
    >
      <g opacity="0.35" stroke="#6a74e0" strokeWidth="1.2" fill="none">
        <path d="M20 320h150l90-52" />
        <path d="M470 180H330l-60 34" />
        <path d="M60 120h90l70 40" />
        <circle cx="60" cy="120" r="4" />
        <circle cx="470" cy="180" r="4" />
      </g>
      <ellipse cx="262" cy="392" rx="180" ry="34" fill="#2f379c" opacity="0.55" />
      <path d="M262 96l-58 34v150l58 34 58-34V130z" fill="#4c57d6" />
      <path d="M262 96l58 34-58 34-58-34z" fill="#8f97ee" />
      <path d="M204 130v150l58 34V164z" fill="#3d47c4" />
      <path d="M120 210l-46 27v92l46 27 46-27v-92z" fill="#4c57d6" />
      <path d="M120 210l46 27-46 27-46-27z" fill="#8f97ee" />
      <path d="M74 237v92l46 27V264z" fill="#2f379c" />
      <path d="M404 196l-46 27v96l46 27 46-27v-96z" fill="#5a63da" />
      <path d="M404 196l46 27-46 27-46-27z" fill="#b4bbf5" />
      <path d="M358 223v96l46 27V250z" fill="#2f379c" />
      <g fill="#eef0fd" opacity="0.9">
        <rect x="216" y="180" width="14" height="8" rx="2" />
        <rect x="216" y="204" width="14" height="8" rx="2" />
        <rect x="216" y="228" width="14" height="8" rx="2" />
        <rect x="86" y="262" width="12" height="7" rx="2" />
        <rect x="86" y="284" width="12" height="7" rx="2" />
        <rect x="370" y="252" width="12" height="7" rx="2" />
        <rect x="370" y="274" width="12" height="7" rx="2" />
      </g>
      <path d="M228 262h68l-18 52h-32z" fill="#8f97ee" />
      <ellipse cx="262" cy="330" rx="44" ry="16" fill="#d9defb" />
      <g fill="#d9defb" opacity="0.95">
        <ellipse cx="96" cy="112" rx="26" ry="13" />
        <ellipse cx="126" cy="122" rx="18" ry="10" />
        <ellipse cx="430" cy="128" rx="24" ry="12" />
        <ellipse cx="404" cy="136" rx="16" ry="9" />
      </g>
    </svg>
  )
}

/** White scalloped wave that closes the navy hero and opens the white page. */
function ScallopDivider() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="block h-[60px] w-full text-white sm:h-[80px]"
    >
      <path
        d="M0 90V54c40-26 80-40 120-40s80 14 120 40c40-26 80-40 120-40s80 14 120 40c40-26 80-40 120-40s80 14 120 40c40-26 80-40 120-40s80 14 120 40c40-26 80-40 120-40s80 14 120 40c40-26 80-40 120-40s80 14 120 40v36z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, ROTATE_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden bg-navy pt-36 sm:pt-40"
    >
      <img
        src="https://picsum.photos/seed/harbor-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {SLIDES.map((slide, index) =>
              index === active ? (
                <div key={slide.id}>
                  <p className="text-sm font-medium text-white sm:text-base">{slide.eyebrow}</p>
                  <h1 className="mt-5 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                    {slide.heading}
                  </h1>
                  <ButtonLink
                    href={slide.href}
                    className="mt-9 rounded-full bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
                  >
                    {slide.cta}
                  </ButtonLink>
                </div>
              ) : null,
            )}
          </div>
          <div className="lg:pl-8">
            <HeroArt />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 pb-16 pt-14">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={cn(
                'h-1 rounded-full transition-all',
                index === active ? 'w-8 bg-white' : 'w-5 bg-white/50 hover:bg-white/80',
              )}
            />
          ))}
        </div>
      </div>

      <ScallopDivider />
    </section>
  )
}
