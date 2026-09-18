import { Monitor, Image, Smartphone } from 'lucide-react'

const items = [
  {
    icon: Monitor,
    title: 'Web Development',
    text: 'Modern, responsive websites built with cutting-edge technologies and best practices.',
  },
  {
    icon: Image,
    title: 'Brand Identity',
    text: 'Comprehensive branding solutions that define your visual language and market presence.',
  },
  {
    icon: Smartphone,
    title: 'Digital Solutions',
    text: 'End-to-end digital product design and development from concept to launch.',
  },
] as const

export function ServicesCompact() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-5 rounded-xl bg-paper p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
