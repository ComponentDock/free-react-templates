import { Palette, Smartphone, Eye, Layout } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Unique Design',
    description:
      'Every project receives a custom design tailored to your brand, ensuring a distinctive and memorable presence.',
  },
  {
    icon: Smartphone,
    title: 'Appropriate UX',
    description:
      'User-centered interfaces that feel intuitive and delightful, guiding visitors naturally through your content.',
  },
  {
    icon: Eye,
    title: 'Perfect Visual',
    description:
      'Pixel-perfect visual execution with attention to typography, spacing, color harmony, and visual hierarchy.',
  },
  {
    icon: Layout,
    title: 'Different Layout',
    description:
      'Creative layouts that break the mold while maintaining usability, keeping your audience engaged and exploring.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">Why Choose Us</h2>
        <p className="mb-12 text-gray-400">We create quality digital products that stand out</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <f.icon className="mx-auto mb-4 text-brand" size={36} />
              <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
