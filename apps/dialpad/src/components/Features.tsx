import { Headphones, Clock, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Online Support',
    description:
      'Our dedicated support team is available around the clock to assist with any inquiries or issues you may encounter.',
  },
  {
    icon: Clock,
    title: '24/7 Round the Clock',
    description:
      'We never close. Our agents are ready to handle your customer service needs at any hour of the day or night.',
  },
  {
    icon: ShieldCheck,
    title: 'Handling All Issues',
    description:
      'From simple questions to complex troubleshooting, our trained professionals resolve every issue efficiently.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
              <h4 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
