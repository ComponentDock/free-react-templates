import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Project Title One',
    description:
      'A comprehensive brand identity and website redesign for a leading tech startup, focusing on clean aesthetics and user engagement.',
    role: 'Role: Design, Illustration, Web',
    quote: '"Nice Looking Website Of Ours."',
    author: 'John Doe',
    image: 'https://picsum.photos/seed/websmith-project1/800/600',
  },
  {
    title: 'Project Title Two',
    description:
      'An end-to-end eCommerce platform build with custom product configuration and seamless checkout experience.',
    role: 'Role: Design, Illustration, Web',
    quote: '"The team delivered beyond our expectations."',
    author: 'Jane Smith',
    image: 'https://picsum.photos/seed/websmith-project2/800/600',
  },
  {
    title: 'Project Title Three',
    description:
      'A responsive mobile-first web application for a health-tech company, featuring real-time data visualization.',
    role: 'Role: Design, Illustration, Web',
    quote: '"Incredible attention to detail and quality."',
    author: 'Mike Johnson',
    image: 'https://picsum.photos/seed/websmith-project3/800/600',
  },
] as const

export function Portfolio() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const project = projects[current]!

  return (
    <section id="portfolio-section" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Recent Works
        </p>
        <h2 className="mb-4 text-[2.2rem] font-bold text-black">Our Portfolio</h2>
        <p className="mb-16 max-w-2xl text-muted-dark">
          Explore our latest projects that showcase our expertise in design and development.
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-black">{project.title}</h3>
            <p className="mb-4 leading-relaxed text-muted-dark">{project.description}</p>
            <p className="mb-6 text-sm font-medium text-muted-dark">{project.role}</p>
            <blockquote className="mb-6 border-l-4 border-brand pl-4 italic text-muted-dark">
              {project.quote}
              <cite className="mt-2 block text-sm font-medium not-italic text-ink">
                — {project.author}
              </cite>
            </blockquote>
            <a
              href="#home-section"
              className="inline-block rounded-[30px] border-2 border-brand bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-black hover:bg-black"
            >
              Visit website
            </a>
          </div>

          {/* Image */}
          <div>
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Slider controls */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
