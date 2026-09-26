const projects = [
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    seed: 'forger-proj-1',
    large: true,
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    seed: 'forger-proj-2',
    large: false,
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    seed: 'forger-proj-3',
    large: false,
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    seed: 'forger-proj-4',
    large: false,
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    seed: 'forger-proj-5',
    large: true,
  },
] as const

function ProjectCard({ title, category, seed }: { title: string; category: string; seed: string }) {
  return (
    <div className="group relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/800/500')` }}
      />
      <div className="absolute inset-0 bg-ink/60 transition-opacity duration-300 group-hover:bg-ink/80" />
      <div className="relative z-10 p-6 text-center">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span className="mt-2 inline-block text-sm text-gray-300">{category}</span>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
            Accomplishments
          </span>
          <h2 className="mt-4 text-3xl font-bold">Our Projects</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          {/* Row 1: large + 2 small */}
          <div className="md:col-span-8">
            <ProjectCard {...projects[0]} />
          </div>
          <div className="grid gap-4 md:col-span-4">
            <ProjectCard {...projects[1]} />
            <ProjectCard {...projects[2]} />
          </div>
          {/* Row 2: small + large */}
          <div className="md:col-span-4">
            <ProjectCard {...projects[3]} />
          </div>
          <div className="md:col-span-8">
            <ProjectCard {...projects[4]} />
          </div>
        </div>
      </div>
    </section>
  )
}
