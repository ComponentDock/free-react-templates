import { useEffect, useState } from 'react'
import { HERO_HEADLINE_PREFIX, TYPED_WORDS } from '../data'
import { CtaLink } from './CtaLink'

const CYCLE_MS = 2000

/* hero — split white/cream background (cream band covers the right half via
   an absolutely-positioned div, mirroring the original's `:before`), centered
   h1 "Grow Up Your Business." with a light word-cycling effect on the last
   word plus a blinking caret, and the "View Our Services" underline CTA. */
export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % TYPED_WORDS.length)
    }, CYCLE_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home-section" className="relative overflow-hidden bg-white py-28 dark:bg-ink">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-cream" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h1 className="mx-auto max-w-3xl text-4xl leading-tight font-black text-brand sm:text-5xl md:text-[64px]">
          {HERO_HEADLINE_PREFIX} <span>{TYPED_WORDS[wordIndex]}</span>
          <span aria-hidden="true" className="animate-pulse">
            |
          </span>
        </h1>
        <div className="mt-8">
          <CtaLink />
        </div>
      </div>
    </section>
  )
}
