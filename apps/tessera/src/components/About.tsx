import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/tessera-about/800/600"
            alt="Architecture studio workspace"
            className="h-72 w-full rounded-lg object-cover lg:h-96"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[2px] text-brand">About</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-snug text-ink dark:text-white lg:text-4xl">
            We are the best Interior, Exterior &amp; Architecture Firm
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-white/60">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything that was left from its
            origin would be the word &ldquo;and&rdquo; and the Little Blind Text should turn around
            and return to its own, safe country.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
