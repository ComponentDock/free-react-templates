import { Building2, Droplets, Sofa, UtensilsCrossed, Trees, Sparkles } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Office Cleaning',
    description:
      'Thorough office space cleaning to maintain a productive and healthy work environment for your team.',
  },
  {
    icon: Droplets,
    title: 'Pool Cleaning',
    description:
      'Professional pool maintenance and cleaning to keep your water crystal clear and inviting all year.',
  },
  {
    icon: Sofa,
    title: 'Carpet Cleaning',
    description:
      'Deep carpet cleaning using advanced techniques to remove stains, odors, and allergens effectively.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Cleaning',
    description:
      'Comprehensive kitchen sanitization ensuring every surface is spotless and food-safe.',
  },
  {
    icon: Trees,
    title: 'Garden Cleaning',
    description:
      'Outdoor space beautification including lawn care, debris removal, and landscape maintenance.',
  },
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description:
      'Streak-free window cleaning for crystal clear views and enhanced natural light indoors.',
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-heading text-3xl md:text-4xl font-bold">How We Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow border border-transparent hover:border-brand-border"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-brand-heading text-lg font-bold mb-2">{title}</h3>
              <p className="text-brand-body text-sm mb-3 leading-relaxed">{description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium hover:underline"
              >
                Read more <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
