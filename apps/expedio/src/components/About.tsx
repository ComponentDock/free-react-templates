import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-mist py-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src="https://picsum.photos/seed/expedio-about/700/500"
            alt="Travel exploration"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold leading-snug text-ink lg:text-3xl">
            Exploration is really the essence of the human spirit
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-smoke lg:text-base">
            Make she&apos;d moved divided air. Whose tree that replenish tone hath own upon them it
            multiply was blessed is lights make gathering so day dominion so creeping air was made.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
