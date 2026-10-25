import { useRef, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { hero } from '../content'
import { useParallax } from '../lib/motion'
import { useTypewriter } from '../lib/typewriter'
import { ActionLink, Reveal, StatCell, containerClass } from './ui'
import { VideoDialog } from './VideoDialog'

/** The hero's paper-white ground, its two drifted discs and the 2:1 photograph. */
export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)
  const blobsRef = useRef<HTMLDivElement | null>(null)
  const slow = useParallax(blobsRef, 0.15)
  const { text, fading } = useTypewriter(hero.phrases)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-24 pb-24 dark:from-primary-900 dark:to-gray-950">
      <div ref={blobsRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary-200/60 blur-3xl motion-reduce:transition-none dark:bg-primary-800/60"
          style={{ transform: `translate3d(0, ${slow}px, 0)` }}
        />
        <div
          className="absolute top-40 right-1/4 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-400/10"
          style={{ transform: `translate3d(0, ${-slow}px, 0)` }}
        />
      </div>

      <div className={cn(containerClass, 'text-center')}>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm leading-5 font-medium text-primary-700 dark:border-primary-700 dark:bg-primary-900/60 dark:text-primary-200">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400/75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            {hero.badge}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1
            aria-label={hero.headlineLabel}
            className="mx-auto mt-6 max-w-4xl text-4xl leading-10 font-bold tracking-[-0.9px] text-primary-900 sm:text-5xl sm:leading-[48px] sm:tracking-[-1.2px] lg:text-6xl lg:leading-[60px] lg:tracking-[-1.5px] dark:text-primary-50"
          >
            <span aria-hidden="true">{hero.headline}</span>{' '}
            <span
              aria-hidden="true"
              data-testid="typewriter"
              data-fading={fading}
              className="typewriter-line text-gradient block min-h-[80px] lg:min-h-[60px]"
            >
              {text}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-7 dark:text-gray-300">
            {hero.lead}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ActionLink href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ActionLink>
            <ActionLink
              href={hero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </ActionLink>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-3 text-sm font-medium text-primary-700 dark:text-primary-200"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-primary-200 bg-white text-primary-700 transition-colors group-hover:bg-primary-50 dark:border-primary-700 dark:bg-gray-900 dark:text-primary-100">
                <Play aria-hidden="true" className="h-4 w-4 fill-current" />
              </span>
              {hero.videoLabel}
            </button>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-gray-200 pt-10 text-left sm:grid-cols-4 dark:border-gray-800">
            {hero.stats.map((stat) => (
              <StatCell key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={600}>
          <figure className="mx-auto mt-20 max-w-[1056px] rounded-2xl bg-white p-4 ring-1 ring-gray-200 shadow-2xl dark:bg-gray-900 dark:ring-gray-800">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width={1200}
              height={600}
              loading="eager"
              className="aspect-[2/1] w-full rounded-lg object-cover"
            />
          </figure>
        </Reveal>
      </div>

      <VideoDialog open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
