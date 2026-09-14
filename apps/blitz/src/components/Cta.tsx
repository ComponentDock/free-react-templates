export function Cta() {
  return (
    <section
      id="cta"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/blitz-cta-bg/1920/600')" }}
    >
      <div className="absolute inset-0 bg-brand/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              We love our customers
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Cursus, enim a ultrices venenatis, ante magna varius felis, ac sodales turpis lectus a
              odio. Quisque facilisis lacus vitae leo tincidunt, id cursus dui blandit.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://picsum.photos/seed/blitz-cta-person/400/500"
              alt="Team member"
              className="w-full max-w-sm rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
