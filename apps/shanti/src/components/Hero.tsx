import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const phrases = [
  'Inspiration For Joyful Living.',
  'Effective Therapy Against Stress.',
  'Flexibility is A Second Power.',
] as const

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typed, setTyped] = useState<string>(phrases[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]!
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80)
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 40)
    } else {
      timeout = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
      }, 300)
    }
    return () => clearTimeout(timeout)
  }, [typed, deleting, phraseIndex])

  return (
    <section id="home" aria-label="Hero" className="relative flex min-h-screen items-center">
      <img
        src="https://picsum.photos/seed/shanti-1/1920/1280"
        alt="A woman meditating in a lotus position"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[68%] bg-gradient-to-tr from-mauve-500 to-transparent opacity-30"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extralight text-black sm:text-6xl lg:text-[80px] lg:leading-[1.1]">
            {typed}
            <span aria-hidden="true" className="ml-0.5 animate-pulse border-r-2 border-black" />
          </h1>
          <h2 className="mt-6 text-xl font-extralight text-black sm:text-2xl">
            Do Yoga today for a better tomorrow
          </h2>
          <div className="mt-10">
            <ButtonLink
              href="#classes"
              className="rounded-full border border-mauve-500 bg-mauve-500 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-mauve-500"
            >
              15 Day Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
