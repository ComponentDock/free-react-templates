import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const expertWords = ['Web Apps', 'WordPress', 'Mobile Apps'] as const
const ROTATION_MS = 2000

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((index) => (index + 1) % expertWords.length)
    }, ROTATION_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/chimper-hero/1920/1080"
        alt="Chimper hero workspace"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl font-normal text-white sm:text-5xl">
          We Are Expert in <span className="text-primary-400">{expertWords[wordIndex]}</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-white/50">We Make Beautiful Things</p>
        <ButtonLink
          href="#contact"
          className="mt-10 rounded-full bg-primary-600 px-8 py-4 text-xs font-medium uppercase tracking-[0.1em] text-white hover:bg-primary-700"
        >
          Hire Us
        </ButtonLink>
      </div>
    </section>
  )
}
