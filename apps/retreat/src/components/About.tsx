export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand text-sm tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-body mb-6">
              Welcome to <br />
              Retreat Hotel Luxury
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              With over 340 hotels worldwide, we offer a wide variety of accommodations catering for
              a perfect stay no matter where your destination. Our commitment to excellence ensures
              every guest enjoys an unforgettable experience.
            </p>
            <p className="text-body">
              Manager: <span className="font-semibold">Michen Taylor</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <img
                src="https://picsum.photos/seed/retreat-about1/400/250"
                alt="Hotel lobby"
                className="rounded w-full object-cover h-36"
                loading="lazy"
              />
              <img
                src="https://picsum.photos/seed/retreat-about2/400/250"
                alt="Hotel room"
                className="rounded w-full object-cover h-36"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/retreat-about3/400/500"
                alt="Hotel pool"
                className="rounded w-full object-cover h-[292px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
