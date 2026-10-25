import { Check, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO, LICENCE_FACTS } from '../content'
import { containerClass, Eyebrow } from './ui'
import { Estimator } from './Estimator'
import { Reveal } from './Reveal'

export function LicenceBar() {
  return (
    <div
      data-licence-bar
      className="border-b border-white/10 bg-ink-800 text-xs leading-4 text-ink-100"
    >
      <div className={cn(containerClass, 'flex h-9 items-center justify-between gap-4')}>
        <ul className="flex items-center gap-4">
          <li>
            <span className="text-white/70">{LICENCE_FACTS[0].lead}</span>{' '}
            <span className="font-semibold">{LICENCE_FACTS[0].strong}</span>
          </li>
          <li className="hidden items-center gap-2 sm:flex">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-500" />
            {LICENCE_FACTS[1].lead}
          </li>
          <li className="hidden items-center gap-2 sm:flex">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-500" />
            {LICENCE_FACTS[2].lead}{' '}
            <span className="font-semibold">{LICENCE_FACTS[2].strong}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold">4.7</span>
          <span className="hidden text-white/70 sm:inline">90+ reviews on Google (sample)</span>
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-900 py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 h-[460px] w-[460px] rounded-full bg-primary-500/10 blur-3xl"
      />
      <div
        className={cn(
          containerClass,
          'relative grid gap-16 lg:grid-cols-12 lg:items-start',
        )}
      >
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal>
            <Eyebrow tone="hero">{HERO.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[36px] leading-[39px] font-bold tracking-[-0.9px] text-white sm:text-5xl sm:leading-[52px] sm:tracking-[-0.9px] lg:text-[60px] lg:leading-[64.8px] lg:tracking-[-1.5px]">
              {HERO.headline} <span className="text-primary-400">{HERO.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg leading-7 text-white/70">{HERO.lead}</p>
            <ul className="mt-8 space-y-3">
              {HERO.promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-start gap-2.5 text-base leading-6 text-white/85"
                >
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div id="proposal" className="min-w-0 lg:col-span-7">
          <Estimator />
        </div>
      </div>
    </section>
  )
}
