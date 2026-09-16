const projects = [
  { seed: 'shingle-proj-1', alt: 'Roofing project 1' },
  { seed: 'shingle-proj-2', alt: 'Roofing project 2' },
  { seed: 'shingle-proj-3', alt: 'Roofing project 3' },
  { seed: 'shingle-proj-4', alt: 'Roofing project 4' },
  { seed: 'shingle-proj-5', alt: 'Roofing project 5' },
  { seed: 'shingle-proj-6', alt: 'Roofing project 6' },
  { seed: 'shingle-proj-7', alt: 'Roofing project 7' },
  { seed: 'shingle-proj-8', alt: 'Roofing project 8' },
]

export function Gallery() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Done Projects</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projects.map(({ seed, alt }) => (
            <div key={seed} className="overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${seed}/400/300`}
                alt={alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
