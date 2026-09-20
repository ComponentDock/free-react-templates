import { Mic, Rocket, Radio, Clock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: Mic,
    title: 'Expert Speakers',
    description:
      'Learn from industry leaders and visionaries who are shaping the future of technology and business.',
  },
  {
    icon: Rocket,
    title: 'All-Day Summit',
    description:
      'Three full days of keynotes, panels, workshops, and networking events designed to inspire.',
  },
  {
    icon: Radio,
    title: 'Live Broadcast',
    description:
      "Can't make it in person? Join our live stream and participate in real-time Q&A sessions.",
  },
  {
    icon: Clock,
    title: 'Early Bird',
    description:
      'Lock in the best rates with our early bird pricing. Limited availability — act fast.',
  },
]

export function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                'rounded-lg bg-white p-8 text-center',
                'shadow-sm transition hover:shadow-md',
              )}
            >
              <feature.icon size={48} className="mx-auto mb-4 text-[#f50136]" aria-hidden="true" />
              <h3 className="mb-3 text-lg font-semibold text-[#18181c]">{feature.title}</h3>
              <p className="mb-4 text-sm text-[#838383]">{feature.description}</p>
              <a
                href="#"
                className="text-sm font-medium text-[#f50136] transition hover:text-[#d4002e]"
              >
                read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
