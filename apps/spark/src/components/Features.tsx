import { Palette, Shield, Headphones, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Easy to Customize',
    description:
      'Tailor Spark to match your brand and workflow. Our intuitive settings make customization a breeze.',
  },
  {
    icon: Shield,
    title: 'Extreme Security',
    description:
      'Your data is safe with enterprise-grade encryption and security protocols built into every layer.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description:
      'Our dedicated support team is available 24/7 to help you resolve any issues quickly.',
  },
  {
    icon: Sparkles,
    title: 'Creative Design',
    description:
      'Beautifully designed interfaces that delight users and make your product stand out.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">
          Some of the best features Of Our App!
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-2xl bg-mist p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
