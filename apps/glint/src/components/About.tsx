export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src="https://picsum.photos/seed/glint-about/600/400"
            alt="Dental clinic interior"
            className="w-full rounded object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-3">
          <h2 className="mb-6 text-3xl font-bold text-ink">We Care About Your Teeth</h2>
          <p className="mb-6 leading-relaxed text-mist">
            Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
            sapien. Suspendisse cursus faucibus finibus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <img
            src="https://picsum.photos/seed/glint-awards/500/120"
            alt="Awards and certifications"
            className="w-full max-w-md rounded object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
