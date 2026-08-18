import { useEffect, useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { heroGreeting, heroLead, heroPersona, typewritePhrases } from '../data'
import { socialLinks } from './BrandIcons'

/** Slow type → hold → delete → next-phrase typewriter cycle. */
function useTypewriter(phrases: readonly string[]) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    // phraseIndex is always kept within bounds by the rotation setter.
    const current = phrases[phraseIndex % phrases.length]!
    let timeout: number

    if (!deleting && text === current) {
      // Fully typed: hold, then start deleting.
      timeout = window.setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      // Fully deleted: move to the next phrase.
      timeout = window.setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setDeleting(false)
      }, 300)
    } else {
      // Type one more character (or delete one).
      timeout = window.setTimeout(
        () =>
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? 45 : 90,
      )
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases])

  return text
}

const BLOBS = [
  { className: 'left-[-6rem] top-[-4rem] size-[22rem]', delay: '' },
  { className: 'left-[18%] top-[58%] size-40', delay: '' },
  { className: 'right-[6%] top-[12%] size-[24rem]', delay: '' },
]

export function Hero() {
  const typed = useTypewriter(typewritePhrases)

  return (
    <section id="home" className="hero-sky relative flex min-h-screen items-center overflow-hidden">
      {/* Decorative pale blob shapes (source hero background blobs) */}
      {BLOBS.map((blob, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-full bg-white/15 ${blob.className}`}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <span className="relative mb-5 inline-block rounded-full bg-white px-5 py-2 text-[13px] font-bold tracking-wide text-brand">
          {heroGreeting}
        </span>

        <h1 className="max-w-2xl text-5xl font-normal leading-tight text-white md:text-6xl">
          I am {heroPersona} <br />
          <span aria-live="polite" data-testid="typewrite">
            {typed}
            <span className="opacity-70" aria-hidden="true">
              |
            </span>
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">{heroLead}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contactme"
            className="inline-flex items-center gap-2 rounded bg-brand px-7 py-4 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand/90"
          >
            Hire Me <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded bg-white px-7 py-4 font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-white/90"
          >
            View Portfolio <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <ul className="mt-10 flex items-center gap-6">
          {socialLinks.slice(0, 3).map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={`${label} profile`}
                className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:text-white/70"
              >
                <Plus aria-hidden="true" className="size-3.5" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
