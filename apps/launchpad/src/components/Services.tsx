import { Palette, Shield, Headphones, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: <Palette className="h-8 w-8 text-brand-600" />,
    title: 'Unlimited Colors',
    description:
      'Customize every pixel of your product with our powerful theming engine. Brand colors, dark mode, and custom palettes — all supported out of the box.',
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-600" />,
    title: 'Smart Security',
    description:
      'Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and real-time threat monitoring to keep your data safe.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-brand-600" />,
    title: 'Endless Support',
    description:
      'Our dedicated support team is available around the clock. Get help via chat, email, or phone — whenever you need it.',
  },
  {
    icon: <Zap className="h-8 w-8 text-brand-600" />,
    title: 'Lightning Fast',
    description:
      'Blazing fast performance with global CDN, optimized builds, and intelligent caching. Your users will feel the difference.',
  },
]

export function Services() {
  return (
    <section id="offer" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Offered Services</h2>
          <p className="mt-2 text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((svc) => (
            <div key={svc.title} className="flex gap-5">
              <div className="shrink-0">{svc.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
