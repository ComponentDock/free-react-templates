export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-heading">Our Customers Say</h2>
        <p className="mb-8 text-base leading-relaxed text-body">
          Whether you&apos;re about to create a website for the first time, or you&apos;re looking
          for a theme that provides advanced capabilities, we have got them in this photography
          template.
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://picsum.photos/seed/captura-author/80/80"
            alt="Robert Thomson"
            className="h-14 w-14 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-sm font-medium text-heading">— Robert Thomson</span>
        </div>
      </div>
    </section>
  )
}
