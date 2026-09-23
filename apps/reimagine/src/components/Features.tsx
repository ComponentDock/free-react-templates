import { Palette, Code, Clock } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Stunning Visuals',
    description:
      'We craft visually compelling designs that capture attention and communicate your brand story effectively.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Our development team writes maintainable, scalable code following modern best practices and standards.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description:
      'We respect your deadlines and deliver projects on time without compromising on quality or attention to detail.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[69%] px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div key={f.title} className="text-center">
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white mb-5"
                style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
              >
                <Icon size={28} />
              </div>
              <h3 className="text-[--color-ink] font-medium text-lg mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[--color-body]">{f.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
