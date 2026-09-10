import { RefreshCw, Infinity as InfinityIcon, Shield, Palette, Lightbulb, Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const services = [
  {
    icon: RefreshCw,
    title: 'Regular Update',
    description: 'We keep your site fresh with regular content and feature updates.',
  },
  {
    icon: InfinityIcon,
    title: 'Infinite Possibilities',
    description: 'Scalable solutions that grow with your business needs.',
  },
  {
    icon: Shield,
    title: 'Good Security',
    description: 'Enterprise-grade security to protect your data and users.',
  },
  {
    icon: Palette,
    title: 'Orange for Carrots',
    description: 'Bold, memorable design that sets you apart from the competition.',
  },
  {
    icon: Lightbulb,
    title: 'Intuitive Thinking',
    description: 'Smart, user-centered design that just makes sense.',
  },
  {
    icon: Play,
    title: 'Play Video',
    description: 'Engaging multimedia experiences built into your website.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <Icon className="mx-auto mb-4 h-10 w-10 text-proton-500" />
              <h5 className="mb-2 text-lg font-bold">{title}</h5>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="rounded-none border-0 bg-black px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-gray-800">
            More Features
          </Button>
        </div>
      </div>
    </section>
  )
}
