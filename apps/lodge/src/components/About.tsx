import { aboutParagraphs, aboutQuote, aboutSectionLabel } from '../data'

/* Quote + about — reference: .about-room (text-center): the 48px/500 serif
   quote banner sits above two columns of hotel copy (.about-para). */
export function About() {
  return (
    <section aria-label={aboutSectionLabel} className="bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2 className="font-serif text-3xl leading-snug font-medium text-heading sm:text-4xl lg:text-5xl lg:leading-[56px]">
          &ldquo;{aboutQuote}&rdquo;
        </h2>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-2">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-[15px] leading-7 text-heading/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
