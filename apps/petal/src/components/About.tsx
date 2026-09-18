import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-rose-400">
              About us
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              We provide all kinds of fresh flower services
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-gray-600 leading-relaxed">
              For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers
              that can be dried and incorporated into late fall and winter floral arrangements has
              been a game-changer. During her growing season, this farmer-florist relies on a vivid
              palette of annuals, perennials and ornamental grasses to supply her studio.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="relative overflow-hidden rounded-lg md:col-span-7">
            <img
              src="https://picsum.photos/seed/petal-about/800/500"
              alt="Flower arrangement"
              className="h-full w-full object-cover"
            />
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-rose-400 shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6 ml-1" />
            </button>
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-rose-400">
              Slow Flowers' Floral Insights
            </span>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Dried flowers are having a renaissance
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              This awareness has been stimulated by sustainable sourcing practices and the desire on
              the part of North American flower growers to "extend the season" beyond the last
              frost.
            </p>
            <a
              href="#contact"
              className="inline-block w-fit bg-rose-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-rose-500"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
