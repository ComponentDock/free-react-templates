import { Play } from 'lucide-react'

export function Methods() {
  return (
    <section id="method" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-heading">Methods</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-heading">How We Work</h3>
          <p className="mb-10 leading-relaxed text-body">
            Our methodology combines research-driven strategy with iterative design. We start by
            understanding your goals, then prototype, test, and refine until every detail aligns
            with your vision.
          </p>
          <div
            className="relative mx-auto flex aspect-video max-w-3xl items-center justify-center rounded-sm bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://picsum.photos/seed/foliox-video/1280/720)',
            }}
          >
            <button
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
