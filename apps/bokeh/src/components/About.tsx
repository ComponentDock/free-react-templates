export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Images */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/bokeh-about1/600/400"
                alt="Photography work"
                className="h-80 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://picsum.photos/seed/bokeh-about2/300/200"
                alt="Behind the scenes"
                className="h-48 w-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="font-heading text-3xl font-bold leading-snug text-heading">
              Let's <br />
              Introduce About <br />
              Myself
            </h3>
            <p className="mt-4 font-body leading-relaxed text-body-text">
              With over a decade of experience in professional photography, I specialize in
              capturing authentic moments across weddings, fashion, and nature. Every project is a
              unique story waiting to be told through the lens.
            </p>
            <p className="mt-4 font-body leading-relaxed text-body-text">
              My approach combines technical expertise with artistic vision, ensuring each
              photograph not only meets but exceeds expectations. From concept to final delivery, I
              work closely with clients to bring their vision to life.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block rounded bg-brand px-8 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
