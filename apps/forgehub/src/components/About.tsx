export function About() {
  return (
    <section id="about-section" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              We are a passionate team of designers, developers, and strategists dedicated to
              creating exceptional digital experiences. With years of expertise in web design,
              branding, and development, we help businesses thrive in the digital landscape.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-bold">Web & Mobile Specialties</h3>
                <p className="mb-2 text-gray-600">
                  Expertise in building responsive web and mobile applications with modern
                  frameworks.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Learn More
                </a>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Intuitive Thinkers</h3>
                <p className="mb-2 text-gray-600">
                  User-centered design approach that puts your customers first.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/forgehub-about2/600/500"
              alt="About ForgeHub"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
