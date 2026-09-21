export function Intro() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted">Something new</p>
          <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            An Extraordinary Experience
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
            mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus
            faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla
            consequat fringilla massa.
          </p>
        </div>

        {/* Two-column image grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img
            src="https://picsum.photos/seed/venuepoint-intro-1/600/400"
            alt="Elegant dining setup"
            className="h-64 w-full rounded-sm object-cover"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/venuepoint-intro-2/600/400"
            alt="Gourmet presentation"
            className="h-64 w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
