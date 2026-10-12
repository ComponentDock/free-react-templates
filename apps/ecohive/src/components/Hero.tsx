import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'

interface Slide {
  id: string
  eyebrow: string
  heading: string
  body: string
  cta: string
  href: string
}

const SLIDES: Slide[] = [
  {
    id: 'power',
    eyebrow: 'Best domain & hosting service provider',
    heading: 'Powerful web hosting',
    body: 'Supercharge your site with detailed analytics, marketing tools, security and backups — all managed from one dashboard.',
    cta: 'Get Started',
    href: '#pricing',
  },
  {
    id: 'green',
    eyebrow: 'Free domain with every yearly plan',
    heading: 'Fast, green web hosting for every site',
    body: 'Renewable-powered servers, free SSL and daily backups keep your site quick, safe and online around the clock.',
    cta: 'Compare Plans',
    href: '#pricing',
  },
]

const ROTATE_MS = 6000

/**
 * Isometric server-stack illustration standing in for the design's hero art:
 * three stacked violet/magenta blocks with circuit traces and orbit rings.
 */
function HeroArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 560 520" className="mx-auto h-auto w-full max-w-[520px]">
      <g fill="none" stroke="#9f78ff" strokeWidth="1.4" opacity="0.45">
        <ellipse cx="280" cy="200" rx="215" ry="150" />
        <ellipse cx="280" cy="200" rx="150" ry="205" />
        <path d="M60 330l90-52h120" />
        <path d="M500 130l-96 56h-96" />
        <path d="M120 92v70l60 34" />
        <path d="M470 300v-64l-58-34" />
        <circle cx="120" cy="92" r="5" />
        <circle cx="470" cy="300" r="5" />
        <circle cx="60" cy="330" r="5" />
        <circle cx="500" cy="130" r="5" />
      </g>

      <g opacity="0.4">
        <path d="M280 62l-96 56v112l96 56 96-56V118z" fill="#4c1e51" />
        <path d="M280 62l96 56-96 56-96-56z" fill="#a838bf" />
        <path d="M184 118v112l96 56V174z" fill="#2d0a31" />
      </g>

      <path d="M280 140l-82 48v96l82 48 82-48v-96z" fill="#7346d6" />
      <path d="M280 140l82 48-82 48-82-48z" fill="#f067ff" />
      <path d="M198 188v96l82 48v-96z" fill="#a136b8" />

      <path d="M280 236l-82 48v104l82 48 82-48V284z" fill="#a838bf" />
      <path d="M280 236l82 48-82 48-82-48z" fill="#f067ff" />
      <path d="M198 284v104l82 48v-104z" fill="#7346d6" />

      <g fill="#fdf0ff" opacity="0.92">
        <rect x="222" y="196" width="26" height="14" rx="3" />
        <rect x="222" y="220" width="26" height="14" rx="3" />
        <rect x="222" y="292" width="26" height="14" rx="3" />
        <rect x="222" y="316" width="26" height="14" rx="3" />
      </g>
      <g fill="#f067ff" opacity="0.9">
        <circle cx="366" cy="212" r="6" />
        <circle cx="366" cy="244" r="6" />
        <circle cx="366" cy="308" r="6" />
        <circle cx="366" cy="340" r="6" />
      </g>
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
      className="bg-shell relative overflow-hidden pt-36 pb-24 sm:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-accent-strong/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {SLIDES.map((slide, index) =>
              index === active ? (
                <div key={slide.id}>
                  <p className="font-heading text-sm font-medium text-eyebrow sm:text-base">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-heading mt-5 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
                    {slide.heading}
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{slide.body}</p>
                  <ButtonLink
                    href={slide.href}
                    className="bg-gradient-to-b from-gradient-from to-gradient-to font-heading mt-10 rounded-full border-0 px-10 py-4 text-sm font-semibold text-white"
                  >
                    {slide.cta}
                  </ButtonLink>
                </div>
              ) : null,
            )}
          </div>
          <div className="lg:pl-6">
            <HeroArt />
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === active ? 'w-10 bg-accent' : 'w-5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
