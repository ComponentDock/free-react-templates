import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_STATS } from '../data'
import { Reveal } from './Reveal'
import { VideoModal } from './VideoModal'

const PHRASES = [
  'as a conversation',
  'as a half-formed question',
  "with someone else's reply",
] as const

type Phrase = (typeof PHRASES)[number]

/** The cycle as an explicit map — no index arithmetic, no modulo, no fallback. */
const NEXT: Record<Phrase, Phrase> = {
  'as a conversation': 'as a half-formed question',
  'as a half-formed question': "with someone else's reply",
  "with someone else's reply": 'as a conversation',
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * The two hero blobs drift with the page (0.15 down, -0.1 up) on top of their
 * CSS float animation, exactly as the reference's `data-parallax` handler does.
 */
function useParallax(factor: number) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current as HTMLDivElement
    const onScroll = () => {
      el.style.transform = `translateY(${Math.round(window.scrollY * factor)}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])

  return ref
}

/**
 * The hero: lavender-to-white gradient, two drifting blobs, the pulsing badge,
 * a two-line `h1` whose second line is gradient-filled and typed through three
 * phrases, three controls, the four-stat proof row and the one photograph.
 */
export function Hero() {
  const [phrase, setPhrase] = useState<Phrase>('as a conversation')
  const [videoOpen, setVideoOpen] = useState(false)
  const playRef = useRef<HTMLButtonElement>(null)
  const blobA = useParallax(0.15)
  const blobB = useParallax(-0.1)

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }

    const timer = setInterval(() => {
      setPhrase((current) => NEXT[current])
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const closeVideo = () => {
    setVideoOpen(false)
    ;(playRef.current as HTMLButtonElement).focus()
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          ref={blobA}
          data-parallax="0.15"
          className="animate-hero-float absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl"
        />
        <div
          ref={blobB}
          data-parallax="-0.1"
          className="animate-hero-float-reverse absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              14,000 builders, one front porch
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Every good idea starts <br />
              <span
                key={phrase}
                data-testid="hero-phrase"
                className="text-gradient animate-phrase-swap"
              >
                {phrase}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              A home for people who think out loud — join a channel, ask the awkward question, get
              an answer from someone who has already solved it.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Join the Community
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="#discussions"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Browse Discussions
              </a>
              <button
                ref={playRef}
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                  <Play aria-hidden="true" className="h-4 w-4" />
                </span>
                Watch Demo
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="text-3xl font-bold tabular-nums text-gray-900 lg:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm text-gray-600">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={500} className="mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
            <img
              src="https://picsum.photos/seed/veranda-1/1600/900"
              alt="Members of the community working through a problem together at a long table"
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>

      <VideoModal open={videoOpen} onClose={closeVideo} />
    </section>
  )
}
