export function SuccessStory() {
  return (
    <section
      id="stories"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/alms-story/1600/900')" }}
    >
      <div className="absolute inset-0 bg-brand/90" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <img
          src="https://picsum.photos/seed/alms-story-photo/800/600"
          alt="Volunteers distributing water containers"
          className="rounded-lg shadow-[0_4px_30px_-5px_rgba(0,0,0,0.6)]"
          loading="lazy"
        />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white">Success Stories</p>
          <h2 className="mt-3 font-heading text-3xl font-light text-white md:text-4xl">
            Clean Water Reaches South East Asia
          </h2>
          <p className="mt-4 text-white/90">
            Nine months after the first filter was installed, the clinic in
            Ban Sop reports a third fewer waterborne cases among children under
            five.
          </p>
          <p className="mt-6 font-black text-white">We have raised $100,000</p>
          <a
            href="#news"
            className="mt-6 inline-block rounded-none border-2 border-success px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-ink hover:bg-ink"
          >
            Read The Full Story
          </a>
        </div>
      </div>
    </section>
  )
}
