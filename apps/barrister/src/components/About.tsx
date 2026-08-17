import { ABOUT } from '../data'

/* About me — light gray band with the gold kicker and name on the left
   above a white text box, photo on the right; stacks on mobile. */
export function About() {
  return (
    <section aria-label="About me" className="bg-surface px-4 py-24 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="lg:max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
            {ABOUT.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-snug text-ink">
            {ABOUT.heading}
          </h2>
          <div className="mt-8 bg-white p-8 shadow-sm">
            <p className="leading-relaxed text-muted">{ABOUT.paragraph}</p>
          </div>
        </div>
        <div className="w-full max-w-md shrink-0 lg:w-2/5">
          <img
            src={ABOUT.photo}
            alt={ABOUT.heading}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}