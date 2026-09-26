const projects = Array.from({ length: 12 }, (_, i) => ({
  seed: `fotoroll-portfolio-${i + 1}`,
  alt: `Portfolio project ${i + 1}`,
  title: [
    'Golden Hour',
    'Quiet Morning',
    'City Lights',
    'Wild Nature',
    'Soft Shadows',
    'Ocean Breeze',
    'Rustic Path',
    'Night Glow',
    'Spring Bloom',
    'Misty Peaks',
    'Desert Dunes',
    'Forest Trail',
  ][i],
}))

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gallery py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Our Portfolio</h2>
          <p className="mx-auto max-w-xl text-ink-light">
            A curated selection of moments captured through the viewfinder, each telling its own
            unique story.
          </p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {projects.map((project) => (
            <figure key={project.seed} className="mb-4 break-inside-avoid">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.alt}
                loading="lazy"
                className="w-full rounded-md transition-transform hover:scale-[1.02]"
              />
              <figcaption className="mt-2 text-center text-sm font-medium text-ink-light">
                {project.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
