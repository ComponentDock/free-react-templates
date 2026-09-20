import { BarChart3, Megaphone, Sparkles, Palette, Sun, Wand2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: ReadonlyArray<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: BarChart3,
    title: 'Management',
    description:
      'Comprehensive event management tools to plan, organize, and execute your conferences with precision.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description:
      'Built-in marketing features to promote your events and reach your target audience effectively.',
  },
  {
    icon: Sparkles,
    title: 'Uniqueness',
    description:
      'Stand out from the crowd with customizable themes and unique event branding options.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Beautiful, responsive designs that look great on any device and impress your attendees.',
  },
  {
    icon: Sun,
    title: 'Creativity',
    description:
      'Creative tools and templates to make your event memorable and engaging for all participants.',
  },
  {
    icon: Wand2,
    title: 'Strategy',
    description:
      'Strategic planning features to maximize attendance and ensure your event achieves its goals.',
  },
]

export function Facilities() {
  return (
    <section id="functionalities" className="bg-white py-24 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink dark:text-white">
            Core Functionalities
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Everything you need to plan, promote, and manage successful conferences and events.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <Icon className="mx-auto h-9 w-9 text-brand transition-colors group-hover:text-gradient-start" />
                <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
