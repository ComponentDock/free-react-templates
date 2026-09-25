import { Globe, Search, Video } from 'lucide-react'

const services = [
  {
    Icon: Globe,
    title: 'Web Design',
    description:
      'Crafting responsive, pixel-perfect websites that engage users and drive results. From landing pages to full-scale web applications.',
  },
  {
    Icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Data-driven SEO strategies that improve visibility, organic traffic, and search rankings for sustainable growth.',
  },
  {
    Icon: Video,
    title: 'Video Editing',
    description:
      'Professional video production and editing for product demos, brand stories, and social media campaigns.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          My <strong className="font-bold">Services</strong>
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-800">{title}</h3>
              <p className="mb-3 max-w-xs text-sm text-gray-600">{description}</p>
              <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
