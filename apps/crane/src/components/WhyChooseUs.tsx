import { Play } from 'lucide-react'

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          {/* Left: video area */}
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/crane-why/600/400"
                alt="Construction project"
                className="w-full object-cover"
                loading="lazy"
              />
              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white shadow-lg transition-transform hover:scale-110"
              >
                <Play size={24} fill="white" />
              </button>
            </div>
          </div>

          {/* Right: text */}
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-heading">Why Choose Us?</h2>
            <blockquote className="mb-4 border-l-4 border-primary-400 pl-4 text-lg italic text-body">
              &ldquo;Construction is a full service construction company offering building solutions
              from start to finish. Our staff has been operating in the industry for ten
              years.&rdquo;
            </blockquote>
            <p className="text-body">
              There are many variations of passages of lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
