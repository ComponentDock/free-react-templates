import { aboutCopy } from '../data'

export function About() {
  return (
    <section id="about" aria-label="About the studio" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg leading-relaxed text-muted md:text-xl">{aboutCopy}</p>
      </div>
    </section>
  )
}
