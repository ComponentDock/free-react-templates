import { Scale, Percent, BookOpen, Zap } from 'lucide-react'

interface Feature {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    description:
      'Our attorneys have extensive experience and deep knowledge in their respective practice areas.',
  },
  {
    icon: Percent,
    title: 'Great Discount',
    description:
      'We offer competitive rates and flexible payment options to make quality legal services accessible.',
  },
  {
    icon: BookOpen,
    title: 'Legal Advisory',
    description:
      'Comprehensive legal advisory services to help you make informed decisions about your case.',
  },
  {
    icon: Zap,
    title: 'Quick Charges',
    description:
      'We act swiftly to protect your interests and ensure timely resolution of legal matters.',
  },
]

export function TrustFeatures() {
  return (
    <section aria-labelledby="trust-heading" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="trust-heading" className="mb-12 text-center text-3xl font-bold text-[#212529]">
          Why to Put Trust in Law Firm
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#007bff]/10">
                  <Icon className="h-8 w-8 text-[#007bff]" aria-hidden={true} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#212529]">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#b2b2b8]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
