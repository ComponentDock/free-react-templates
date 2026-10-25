import { useCallback, useRef, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { hero } from '../content'
import { useParallax } from '../lib/motion'
import { useTypewriter } from '../lib/typewriter'
import { VideoDialog } from './VideoDialog'
import { ActionLink, Badge, Reveal, containerClass } from './ui'

/**
 * A paper-coloured hero: the badge, a two-line h1 whose second line is
 * typewritten, the lead, three actions and one 2:1 photograph. The blobs behind
 * it drift at 0.15 and −0.1 of the scroll.
 */
export function Hero() {
  const blobARef = useRef<HTMLDivElement | null>(null)
  const blobBRef = useRef<HTMLDivElement | null>(null)
  const blobAOffset = useParallax(blobARef, 0.15)
  const blobBOffset = useParallax(blobBRef, -0.1)
  const { text, fading } = useTypewriter(hero.phrases)
  const [videoOpen, setVideoOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 lg:py-32 dark:from-gray-900 dark:to-gray-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          ref={blobARef}
          style={{ transform: `translateY(${blobAOffset}px)` }}
          className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl animate-hero-float motion-reduce:animate-none"
        />
        <div
          ref={blobBRef}
          style={{ transform: `translateY(${blobBOffset}px)` }}
          className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl animate-hero-float-reverse motion-reduce:animate-none"
        />
      </div>

      <div className={cn(containerClass, 'relative')}>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal delay={0}>
            <Badge>
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              {hero.badge}
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1
              aria-label={`${hero.headline} ${hero.phrases[0]}`}
              className="mt-6 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-[60px] lg:text-6xl dark:text-white"
            >
              <span>{hero.headline}</span>
              <br />
              <span
                aria-hidden="true"
                data-testid="typewriter"
                data-fading={fading}
                className="text-gradient typewriter-line"
              >
                {text}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl dark:text-gray-300">
              {hero.lead}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ActionLink href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ActionLink>
              <ActionLink href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </ActionLink>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                  <Play aria-hidden="true" className="h-4 w-4" />
                </span>
                {hero.videoLabel}
              </button>
            </div>
          </Reveal>

          <Reveal delay={500} className="mt-16 lg:mt-24">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width={1200}
                height={600}
                loading="eager"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <VideoDialog
        open={videoOpen}
        onClose={closeVideo}
        url={hero.videoUrl}
        trigger={triggerRef}
      />
    </section>
  )
}
