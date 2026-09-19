export function ImageWithText() {
  return (
    <section className="bg-warm-100 py-16 px-5">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/drape-rack/1400/1050"
            alt="Rail of natural fibre clothing"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Made to last</h2>
          <p className="text-warm-600 leading-relaxed">
            Natural fibres, considered construction and a fit that holds its shape. We would rather
            sell you one jacket you keep for ten years than three you replace every season.
          </p>
          <div>
            <a
              href="#about"
              className="inline-block border border-warm-900 px-6 py-2.5 text-sm font-medium hover:bg-warm-900 hover:text-white transition-colors"
            >
              Our story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
