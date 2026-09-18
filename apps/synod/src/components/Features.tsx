import { Heart, BookOpen, Users } from 'lucide-react'
import type { ComponentType } from 'react'

const featureData: { icon: ComponentType<{ className?: string }>; title: string; text: string }[] =
  [
    {
      icon: Heart,
      title: 'Spread Love',
      text: 'We believe in showing unconditional love and compassion to everyone in our community.',
    },
    {
      icon: BookOpen,
      title: 'Bible Study',
      text: 'Join our weekly Bible study groups to deepen your understanding of scripture and grow in faith.',
    },
    {
      icon: Users,
      title: 'Community',
      text: 'Build meaningful connections with fellow believers through our fellowship programs and events.',
    },
  ]

export function Features() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded bg-white p-8 text-center shadow-sm">
                <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-heading">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feature.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
