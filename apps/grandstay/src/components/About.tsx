import { ABOUT } from '../data'

/** About — centered quote followed by two-column body text. */
export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-heading text-2xl italic leading-relaxed text-navy md:text-3xl">
          &ldquo;{ABOUT.quote}&rdquo;
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="text-left text-base leading-relaxed text-ink/80">{ABOUT.paragraph1}</p>
          <p className="text-left text-base leading-relaxed text-ink/80">{ABOUT.paragraph2}</p>
        </div>
      </div>
    </section>
  )
}
