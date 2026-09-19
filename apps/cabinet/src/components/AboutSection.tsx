export function AboutSection() {
  return (
    <section id="about" className="bg-warm py-16">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="https://picsum.photos/seed/cabinet-workshop/1200/800"
              alt="The Cabinet workshop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold uppercase text-navy">Manufacturer</h2>
            <div className="space-y-4 text-sm leading-relaxed text-ink">
              <p>
                We build in our own workshop, so nothing passes through a middleman. Hardwood
                frames, eight-way hand-tied springs and upholstery cut on site.
              </p>
              <p>That is why a Cabinet sofa costs what it does, and why it lasts.</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-block bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand/90"
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
