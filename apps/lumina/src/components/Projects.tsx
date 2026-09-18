const projects = [
  {
    title: 'Vector Illustration',
    desc: 'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology than we have ever had.',
  },
  {
    title: 'Digital Branding',
    desc: 'Our approach to digital branding combines strategic thinking with creative execution to build memorable and impactful brand identities.',
  },
  {
    title: 'Web Experience',
    desc: 'We craft immersive web experiences that engage users through thoughtful interaction design, smooth animations, and pixel-perfect layouts.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium text-white">Some Projects</h2>
          <p className="mx-auto max-w-xl text-white/80">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded bg-white/10 backdrop-blur md:flex-row"
            >
              <div className="w-full md:w-2/3">
                <img
                  src={`https://picsum.photos/seed/lumina-proj${i}/800/400`}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex w-full items-center p-8 md:w-1/3">
                <div>
                  <h3 className="mb-3 text-xl font-medium text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
