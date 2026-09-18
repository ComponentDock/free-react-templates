import { Palette, Code2, Megaphone } from 'lucide-react'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
}

function ServiceCard({ number, title, description, tags, icon }: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl font-bold text-brand-400">{number}</span>
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    number: '01',
    title: 'User experience design',
    description:
      'We create intuitive, research-driven interfaces that delight users and drive engagement across every touchpoint.',
    tags: ['Branding and Identity', 'Mobile App', 'Web Design'],
    icon: <Palette className="h-6 w-6 text-indigo-400" aria-hidden="true" />,
  },
  {
    number: '02',
    title: 'Web and App development',
    description:
      'Full-stack development from responsive websites to native mobile applications, built for performance and scale.',
    tags: ['WordPress', 'iOS & Android', 'Front End'],
    icon: <Code2 className="h-6 w-6 text-indigo-400" aria-hidden="true" />,
  },
  {
    number: '03',
    title: 'Digital and innovative marketing',
    description:
      'Data-powered marketing strategies that grow your audience, generate leads, and maximize ROI.',
    tags: ['Lead Generation', 'Social Media', 'Email Marketing'],
    icon: <Megaphone className="h-6 w-6 text-indigo-400" aria-hidden="true" />,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <ServiceCard key={svc.number} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}
