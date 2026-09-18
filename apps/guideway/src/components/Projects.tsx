import { ArrowRight } from 'lucide-react'

const projects = [
  { seed: 'guideway-proj-1', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-2', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-3', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-4', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-5', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-6', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-7', title: 'Branding & Illustration Design', category: 'Web Design' },
  { seed: 'guideway-proj-8', title: 'Branding & Illustration Design', category: 'Web Design' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-navy lg:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Separated they live in. A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((p) => (
            <div
              key={p.seed}
              className="group relative overflow-hidden rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${p.seed}/400/300)` }}
            >
              <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/70" />
              <div className="flex h-48 items-center justify-center sm:h-56">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy opacity-0 transition-all group-hover:opacity-100"
                  aria-label={`View ${p.title}`}
                >
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="font-heading text-sm font-semibold text-navy">{p.title}</h3>
                <span className="text-xs text-mist">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
