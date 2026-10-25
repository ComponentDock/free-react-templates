import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { HERO_FACTS, HERO_IMAGE, HERO_PHRASES } from '../data'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * A hero decoration: a blurred disc that drifts by `scrollY × factor`. The
 * reference multiplies the ABSOLUTE offset, so the blobs travel several hundred
 * pixels by the end of the page — that formula is reproduced, not corrected.
 * While the disc is off-screen the transform is left alone.
 */
function Blob({ factor, className, color }: { factor: number; className: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const element = ref.current as HTMLDivElement
      const rect = element.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight + 200) {
        return
      }
      element.style.transform = `translateY(${window.scrollY * factor}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-parallax={factor}
      className={cn('absolute rounded-full blur-3xl', color, className)}
    />
  )
}

/**
 * The gradient headline span. Every 3 s it fades out (300 ms, 10 px down), swaps
 * the phrase, fades back in and wraps; under `prefers-reduced-motion` it holds
 * the first phrase and never starts a timer.
 */
export function Typewriter({ phrases = HERO_PHRASES }: { phrases?: string[] }) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      return
    }

    const out = setTimeout(() => setPhase('out'), 2700)
    const swap = setTimeout(() => {
      setIndex((current) => (current + 1) % phrases.length)
      setPhase('in')
    }, 3000)

    return () => {
      clearTimeout(out)
      clearTimeout(swap)
    }
  }, [index, reduced, phrases.length])

  return (
    <span
      data-testid="typewriter"
      aria-live="off"
      className={cn(
        'text-gradient inline-block transition-all duration-300 ease-out',
        phase === 'out' ? 'translate-y-2.5 opacity-0' : 'translate-y-0 opacity-100',
      )}
    >
      {phrases[index]}
    </span>
  )
}

/**
 * The hero: a pink-to-white ground with two drifting blobs, a ping-dot pill, the
 * 60 px headline whose second line is the gradient typewriter, one lede, two
 * CTAs, four static facts and the page's only photograph.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <Blob
          factor={0.15}
          color="bg-primary-200/50"
          className="animate-hero-float -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2"
        />
        <Blob
          factor={-0.1}
          color="bg-primary-100/40"
          className="animate-hero-float-reverse top-0 right-0 h-[400px] w-[400px]"
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400/75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
          </span>
          RCVS registered · Shrewsbury · Independent since 2009
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Your vet should tell you
          <br />
          <Typewriter />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          An independent small animal practice in Shrewsbury. Dogs, cats and small mammals, with our
          fee guide published on this website and a clear answer about who sees your animal at three
          in the morning.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn btn-primary px-6 py-3 text-base shadow-lg shadow-primary-600/25"
          >
            Register your pet
          </a>
          <a href="#fees" className="btn btn-secondary px-6 py-3 text-base">
            See the fee guide
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
          {HERO_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-gray-900 lg:text-4xl">
                  {fact.value}
                </span>
                <span className="mt-1 block text-sm text-gray-600">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width="1024"
            height="512"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
