import { Play, ArrowRight } from 'lucide-react'

export function LatestSermon() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row">
        {/* Video placeholder */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://picsum.photos/seed/devotion-sermon/800/500"
            alt="Sermon video"
            className="w-full rounded object-cover"
            loading="lazy"
          />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/90 p-4 text-white shadow-lg transition-colors hover:bg-brand"
            aria-label="Play sermon video"
          >
            <Play className="h-8 w-8" />
          </button>
        </div>

        {/* Sermon info */}
        <div className="w-full md:w-1/2">
          <span className="mb-2 text-sm font-medium text-gray-500">Latest Sermon</span>
          <h2 className="mb-1 font-amatic text-4xl font-bold text-navy">God is Love</h2>
          <p className="mb-4 text-sm text-gray-500">
            <em>by</em> Ptr. Johnson
          </p>
          <p className="mb-2 text-lg font-medium text-navy">If ye love Me, keep My Commandments.</p>
          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet
            dolor possimus voluptas.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold uppercase text-brand hover:text-brand-dark"
          >
            Watch Video <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
