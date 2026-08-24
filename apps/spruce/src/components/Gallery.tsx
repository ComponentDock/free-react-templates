const projects = [
  {
    title: 'Mobile App',
    description: 'A sleek mobile application for iOS and Android.',
    seed: 'spruce-gallery-1',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with seamless checkout.',
    seed: 'spruce-gallery-2',
  },
  {
    title: 'Corporate Website',
    description: 'Professional business site with custom branding.',
    seed: 'spruce-gallery-3',
  },
]

export function Gallery() {
  return (
    <section id="portfolio" className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">
            Projects we have done.
          </h2>
          <p className="text-muted font-body text-lg">
            Combine sections from our vast component library and create beautiful.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={`https://picsum.photos/seed/${p.seed}/400/300`}
                alt={p.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/80 font-body text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
