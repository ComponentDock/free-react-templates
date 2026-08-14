import { about } from '../data'

/** About section mirroring the hero split: portrait on the left, "About Me"
 *  / "Personal Details" copy with a CTA on the right. */
export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row">
        <div className="shrink-0">
          <img
            src={about.image}
            alt={about.alt}
            width={480}
            height={560}
            className="h-auto w-full max-w-md object-cover"
          />
        </div>
        <div className="max-w-xl">
          <h6 className="text-sm font-normal uppercase tracking-[2px] text-ink">{about.eyebrow}</h6>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-ink lg:text-4xl">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base font-light leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <a
            href="#portfolio"
            className="mt-8 inline-block bg-gradient-to-br from-primary to-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
