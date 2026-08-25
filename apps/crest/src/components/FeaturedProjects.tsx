import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    image: 'https://picsum.photos/seed/crest-proj1/600/400',
    heading: 'Essentials helped us to increase our revenue by more.',
    description: 'A complete redesign and rebrand that delivered measurable results.',
  },
  {
    image: 'https://picsum.photos/seed/crest-proj2/600/400',
    heading: 'Digital transformation for a growing consultancy.',
    description: 'Modernized the stack and improved user engagement by 40%.',
  },
]

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-[44px] font-bold leading-[1.4] text-navy">Handpicked by Crest</h2>
        <p className="mb-12 max-w-3xl text-navy-gray">
          Apply for a business loan today and, if approved, you could enjoy the first 8 weeks with
          no repayments. Get the breathing space now, and we&apos;ll extend your term at the other.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.heading}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={project.image}
                alt={project.heading}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-navy">{project.heading}</h3>
                <p className="mb-4 text-navy-gray">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-navy"
                >
                  View Project
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
