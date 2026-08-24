import { Play } from 'lucide-react'

export function VideoDemo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink sm:text-4xl">
          See Spark in Action
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-smoke">
          Watch how Spark transforms your workflow with an intuitive interface and powerful features
          that save you time every day.
        </p>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/seed/spark-video/1200/675"
            alt="Spark demo video placeholder"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-primary-600">
            HD Quality
          </span>
          <span className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-primary-600">
            Live Demo
          </span>
          <span className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-primary-600">
            3 Minutes
          </span>
        </div>
      </div>
    </section>
  )
}
