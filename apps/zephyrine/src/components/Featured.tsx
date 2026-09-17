import { Sun, Code, Clock } from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Stunning Visuals',
    description:
      'We craft visually compelling designs that captivate and engage your audience from the very first glance.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Our development team writes maintainable, efficient code that stands the test of time and scale.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description:
      'We respect deadlines and deliver projects on schedule without compromising on quality or detail.',
  },
]

export function Featured() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[68.75%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}
              >
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-[#222222] text-lg font-semibold uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
