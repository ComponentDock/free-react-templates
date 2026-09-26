const works = [
  { title: 'Bonzai Tree', category: 'Web Application', image: 'forgehub-work1' },
  { title: 'Simple Woman', category: 'Branding', image: 'forgehub-work2' },
  { title: 'Fruits', category: 'Website', image: 'forgehub-work3' },
  { title: 'Design Material', category: 'Web Application', image: 'forgehub-work4' },
  { title: 'Handy Food', category: 'Branding', image: 'forgehub-work5' },
  { title: 'Cat With Cup', category: 'Website', image: 'forgehub-work6' },
]

export function Portfolio() {
  return (
    <section id="work-section" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Works</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            A selection of our recent projects across web applications, branding, and website
            design.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <a key={w.title} href="#" className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${w.image}/600/400`}
                alt={w.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-1 text-xl font-bold text-white">{w.title}</h3>
                <span className="text-sm text-primary">{w.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
