import { Target, Mic, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Empowering innovators and entrepreneurs to shape the future through collaboration and cutting-edge insights.',
  },
  {
    icon: Mic,
    title: 'Expert Panels',
    description:
      'Learn from world-class speakers and industry veterans who are driving transformation across sectors.',
  },
  {
    icon: ThumbsUp,
    title: 'Great Reviews',
    description:
      'Thousands of past attendees rate Huddle as the must-attend conference for professional growth.',
  },
]

export interface FeaturesProps {
  className?: string
}

export function Features({ className }: FeaturesProps) {
  return (
    <section className={`bg-gray-50 py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-gray-900 md:text-4xl">
          Why Us?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <f.icon className="mx-auto mb-4 h-10 w-10 text-brand" strokeWidth={1.5} />
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-900">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
