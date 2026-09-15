import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Text column */}
        <div className="flex flex-col justify-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-subtitle-green">
            About Us
          </span>
          <h2 className="mb-6 text-3xl font-bold text-ink lg:text-4xl">
            We Are The Reason For Change
          </h2>
          <p className="mb-4 leading-relaxed text-body">
            Our mission is to protect and preserve the natural environment for future generations.
            We work with communities, governments, and organizations to create sustainable solutions
            that benefit both people and the planet.
          </p>
          <p className="leading-relaxed text-body">
            From clean water initiatives to wildlife conservation, our team is dedicated to making a
            measurable impact on the world around us.
          </p>
        </div>

        {/* Image column with video play button */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/ecopulse-about/800/600"
            alt="Environmental conservation work"
            className="h-full w-full rounded-lg object-cover"
          />
          <button
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play size={24} fill="white" />
          </button>
        </div>
      </div>
    </section>
  )
}
