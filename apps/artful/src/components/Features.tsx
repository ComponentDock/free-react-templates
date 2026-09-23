import { Award, Heart, Zap } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award Winning',
    description:
      'Our work has been recognized with multiple industry awards for excellence in creative design and artistry.',
  },
  {
    icon: Heart,
    title: 'Passionate Team',
    description:
      'A dedicated team of artists and designers who pour their heart and soul into every project they undertake.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'Efficient project management ensures timely delivery without compromising on quality or creative standards.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold text-artful-heading">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-lg border border-gray-100 p-6"
            >
              <div className="flex-shrink-0 text-artful-red">
                <f.icon size={32} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-artful-heading">{f.title}</h3>
                <p className="text-sm leading-relaxed text-artful-body">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
