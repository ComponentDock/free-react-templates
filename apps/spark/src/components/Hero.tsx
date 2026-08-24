import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-lavender py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-600">
              App Landing Page
            </span>
            <h1 className="mb-6 text-4xl font-bold text-ink sm:text-5xl lg:text-6xl">
              Get things done with <span className="text-primary-500">Spark</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-smoke">
              Spark helps you manage your workflow, boost productivity, and achieve more with less
              effort. Download the app and get started today.
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-600"
            >
              <ArrowDown className="h-4 w-4" />
              Download
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/spark-hero/1200/600"
              alt="Spark app preview"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
