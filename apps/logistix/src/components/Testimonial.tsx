export function Testimonial() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        {/* Left: Testimonial text */}
        <div className="bg-gray-900 px-6 py-16 sm:px-12 lg:py-20">
          <p className="mb-8 text-sm font-medium uppercase text-brand">Client Testimonial</p>
          <blockquote className="mb-8 text-lg leading-relaxed text-gray-300 italic">
            &ldquo;Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus.
            Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/logistix-founder/80/80"
              alt="Graham Cracker"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">Graham Cracker</p>
              <p className="text-sm text-gray-400">Logistics Manager</p>
            </div>
          </div>
        </div>

        {/* Right: Video placeholder */}
        <div
          className="flex min-h-[400px] items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/logistix-video/800/500)',
          }}
        >
          <button
            type="button"
            aria-label="Play video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/90 text-white transition-transform hover:scale-110"
          >
            <span className="ml-1 text-2xl">&#9654;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
