import { Scale, Percent, BookOpen, Zap } from 'lucide-react'

interface TrustFeature {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  title: string
  description: string
}

const features: TrustFeature[] = [
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

export function TrustSection() {
  return (
    <section id="about" aria-labelledby="trust-heading" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: Lady Justice image */}
        <div className="relative overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/precedent-trust/600/500"
            alt="Lady Justice statue representing legal expertise"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Trust content */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#c5a55a]">
            Welcome to Precedent
          </p>
          <h2 id="trust-heading" className="font-heading mb-6 text-3xl font-bold text-[#1a1a2e]">
            Why to Put Trust In Precedent
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[#666666]">
            We are committed to providing exceptional legal representation with integrity and
            dedication. Our experienced team fights tirelessly to protect your rights and achieve
            the best possible outcomes.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c5a55a]/10">
                    <Icon className="h-6 w-6 text-[#c5a55a]" aria-hidden={true} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-[#1a1a2e]">{feature.title}</h3>
                    <p className="text-xs leading-relaxed text-[#666666]">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
