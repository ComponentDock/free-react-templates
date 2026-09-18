import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/presswell-about/700/500"
              alt="Presswell laundry facility"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              About company
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes! We have been serving the community with top-quality laundry
              services for over a decade.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes! Our state-of-the-art equipment ensures the best results every
              time.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
