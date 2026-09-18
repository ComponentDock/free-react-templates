import { cn } from '@free-react-templates/ui'
import { Quote } from 'lucide-react'

const projects = [
  {
    title: 'Brand Identity — Luxe Hotels',
    description:
      'A complete brand overhaul for a luxury hotel chain, including logo design, color palette, typography system, and comprehensive brand guidelines.',
    image: 'https://picsum.photos/seed/mortar-portfolio-1/800/600',
    testimonial:
      'The team delivered a brand identity that truly captures the essence of luxury. Our guests notice the difference.',
    client: 'Sarah Chen, Luxe Hotels',
  },
  {
    title: 'eCommerce Platform — Artisan Market',
    description:
      'A custom-built eCommerce solution featuring product catalogs, secure checkout, and real-time inventory management for artisan goods.',
    image: 'https://picsum.photos/seed/mortar-portfolio-2/800/600',
    testimonial:
      'Our online sales increased by 300% within the first quarter. The platform is intuitive and beautiful.',
    client: 'Marcus Webb, Artisan Market',
  },
  {
    title: 'Mobile App — FitTrack Pro',
    description:
      'A fitness tracking mobile application with workout plans, progress analytics, social challenges, and wearable device integration.',
    image: 'https://picsum.photos/seed/mortar-portfolio-3/800/600',
    testimonial:
      'They turned our concept into a polished app that our users love. The attention to UX detail was outstanding.',
    client: 'Elena Rodriguez, FitTrack',
  },
] as const

interface ProjectRowProps {
  title: string
  description: string
  image: string
  testimonial: string
  client: string
  reversed?: boolean
}

function ProjectRow({ title, description, image, testimonial, client, reversed }: ProjectRowProps) {
  return (
    <div
      className={cn(
        'grid items-center gap-10 lg:grid-cols-2',
        reversed && 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]',
      )}
    >
      <img src={image} alt={title} className="h-auto w-full rounded shadow-lg" loading="lazy" />
      <div>
        <h3 className="text-xl font-medium text-ink dark:text-gray-100">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-smoke dark:text-gray-400">{description}</p>
        <div className="mt-6 rounded border border-gray-100 bg-mist p-5 dark:border-gray-800 dark:bg-gray-900">
          <Quote className="mb-2 h-5 w-5 text-primary-400" aria-hidden="true" />
          <p className="text-sm italic leading-relaxed text-smoke dark:text-gray-300">
            &ldquo;{testimonial}&rdquo;
          </p>
          <p className="mt-3 text-xs font-medium text-ink dark:text-gray-200">&mdash; {client}</p>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfolio" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink dark:text-gray-100">Our Portfolio</h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            A showcase of our recent work and the results we have delivered for our clients.
          </p>
        </div>
        <div className="mt-14 space-y-16">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} {...project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
