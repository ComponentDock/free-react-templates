import { Check } from 'lucide-react'

interface FeatureCardProps {
  number: string
  title: string
  description: string
  items: string[]
}

function FeatureCard({ number, title, description, items }: FeatureCardProps) {
  return (
    <div className="relative p-6">
      <span className="absolute right-4 top-0 text-6xl font-bold text-gray-100">{number}</span>
      <h3 className="mb-3 text-xl font-bold text-brand">{title}</h3>
      <p className="mb-4 text-body">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-body">
            <Check size={16} className="text-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const FEATURES = [
  {
    number: '01.',
    title: 'Innovate',
    description:
      'We push boundaries to deliver cutting-edge solutions that keep your business ahead of the curve.',
    items: ['Customer Experience', 'Product Management', 'Proof of Concept'],
  },
  {
    number: '02.',
    title: 'Create',
    description: 'From concept to launch, we craft digital experiences that captivate and convert.',
    items: ['Web Design', 'Branding', 'Web & App Development'],
  },
  {
    number: '03.',
    title: 'Scale',
    description: 'Grow your reach with data-driven strategies that amplify your digital presence.',
    items: ['Social Media', 'Paid Campaigns', 'Marketing & SEO'],
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
