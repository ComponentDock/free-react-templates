import { INTRO } from '../data'

/* Intro — centered promise heading, two supporting paragraphs, and a
   signature rendered as cursive italic script text (the source uses a
   signature image — never copy the asset), with a gold vertical rule
   accent at the bottom-right. */
export function Intro() {
  return (
    <section aria-label="Intro" className="relative px-4 py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold leading-snug text-ink md:text-4xl">
          {INTRO.heading}
        </h2>
        {INTRO.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-6 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 font-display text-3xl italic text-ink/80">{INTRO.signature}</p>
      </div>
      <div className="absolute bottom-0 right-4 h-[160px] w-px bg-brand" aria-hidden="true" />
    </section>
  )
}