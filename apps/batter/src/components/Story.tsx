import { ArrowRight } from 'lucide-react'

export function Story() {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          <div className="md:w-1/3">
            <h3 className="mb-2 text-2xl font-bold text-white">Our Untold Story</h3>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Re-imagining the way
            </span>
          </div>
          <div className="rounded-lg bg-white p-8 md:w-2/3">
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              From the part of beginning
            </h6>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Usage of the Internet is becoming more common due to rapid advancement of technology
              and the power of globalization. Societies are becoming more inter-connected. Thoughts
              from different perspectives are shared daily.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
