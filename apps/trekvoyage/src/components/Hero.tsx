import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_TEAL } from '../lib/buttonStyles'

const SLIDES = [
  'trekvoyage-hero-1',
  'trekvoyage-hero-2',
  'trekvoyage-hero-3',
  'trekvoyage-hero-4',
  'trekvoyage-hero-5',
] as const

/* Destination words the headline types through, opening on the reference's
   "Sahara Desert". */
const TYPE_WORDS = ['Sahara Desert', 'Santorini', 'The Maldives', 'Dubai'] as const

const SLIDE_INTERVAL = 5000
const TYPE_INTERVAL = 120
const HOLD_INTERVAL = 1500

/* Full-viewport photographic hero: a crossfading slider under a light wash
   with a centered white headline whose last words type themselves in, then a
   turquoise pill call to action. */
export function Hero() {
  const [active, setActive] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [])

  const word = TYPE_WORDS[wordIndex]!
  const typing = typed < word.length

  useEffect(() => {
    const id = setTimeout(
      () => {
        if (typing) {
          setTyped(typed + 1)
        } else {
          setWordIndex((wordIndex + 1) % TYPE_WORDS.length)
          setTyped(0)
        }
      },
      typing ? TYPE_INTERVAL : HOLD_INTERVAL,
    )
    return () => clearTimeout(id)
  }, [typing, typed, wordIndex])

  return (
    <section id="hero" className="relative h-screen min-h-[670px] overflow-hidden">
      {SLIDES.map((seed, index) => (
        <img
          key={seed}
          alt=""
          aria-hidden="true"
          src={`https://picsum.photos/seed/${seed}/1920/1080`}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div className="hero-wash absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-[32px] text-white md:text-[50px]">
            Travel to the most beautiful places in the world, like{' '}
            <span data-testid="typed-word" className="whitespace-pre">
              {word.slice(0, typed)}
            </span>
            <span
              aria-hidden="true"
              className="ml-[2px] inline-block h-[0.85em] w-[2px] translate-y-[2px] animate-pulse bg-white"
            />
          </h1>
          <ButtonLink href="#contact" className={cn(BUTTON_BASE, BUTTON_TEAL, 'mt-[25px]')}>
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
