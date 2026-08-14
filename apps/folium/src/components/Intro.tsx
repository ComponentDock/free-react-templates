import { introStatement } from '../data'

/** White intro section with a single thin large headline statement. */
export function Intro() {
  return (
    <section id="about" aria-label="About" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-light leading-snug text-black">{introStatement}</h1>
      </div>
    </section>
  )
}
