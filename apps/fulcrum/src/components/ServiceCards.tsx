import { BarChart3, Megaphone, Palette, Target, TrendingUp, Globe } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Content Marketing',
    description:
      'Strategic content creation and distribution that drives engagement, builds authority, and converts your audience into loyal customers.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description:
      'Comprehensive social media strategies that amplify your brand voice, grow your community, and deliver measurable results across platforms.',
  },
  {
    icon: Palette,
    title: 'Brand & Logo Design',
    description:
      'Creative visual identities that capture your brand essence, from logos to complete brand systems that stand out in the market.',
  },
  {
    icon: Target,
    title: 'Social Media Advertising',
    description:
      'Data-driven ad campaigns that target the right audience at the right time, maximizing your return on ad spend across social platforms.',
  },
  {
    icon: TrendingUp,
    title: 'PPC Advertising',
    description:
      'Performance-focused pay-per-click campaigns that drive qualified traffic, generate leads, and optimize your advertising budget.',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Modern, responsive websites that combine stunning design with seamless functionality to deliver exceptional user experiences.',
  },
] as const

export function ServiceCards() {
  return (
    <section id="services" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-5 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="h-12 w-12 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-ink">{service.title}</h3>
                <p className="text-body leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
