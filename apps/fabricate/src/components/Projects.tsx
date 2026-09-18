const projects = [
  { image: 'https://picsum.photos/seed/fabricate-p1/800/600', alt: 'Industrial project 1' },
  { image: 'https://picsum.photos/seed/fabricate-p2/800/600', alt: 'Industrial project 2' },
  { image: 'https://picsum.photos/seed/fabricate-p3/800/600', alt: 'Industrial project 3' },
  { image: 'https://picsum.photos/seed/fabricate-p4/800/600', alt: 'Industrial project 4' },
]

export function Projects() {
  return (
    <section id="project" className="py-20 bg-paper">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Latest Finished Projects</h2>
          <p className="text-mist max-w-xl mx-auto">
            Explore our portfolio of completed industrial projects that showcase our expertise and
            commitment to quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="block overflow-hidden rounded-lg group">
              <img
                src={projects[0]?.image}
                alt={projects[0]?.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="block overflow-hidden rounded-lg group">
              <img
                src={projects[1]?.image}
                alt={projects[1]?.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-span-1">
            <a href="#" className="block overflow-hidden rounded-lg group">
              <img
                src={projects[2]?.image}
                alt={projects[2]?.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-span-1">
            <a href="#" className="block overflow-hidden rounded-lg group">
              <img
                src={projects[3]?.image}
                alt={projects[3]?.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
