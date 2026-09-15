import { Clock, Star, Headphones } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Deal On Time',
    description:
      'We respect your timeline. From listing to closing, every milestone is managed efficiently so you can plan with confidence.',
  },
  {
    icon: Star,
    title: 'Good Reviews',
    description:
      'Hundreds of satisfied clients rate us five stars. Our reputation is built on honesty, results, and lasting relationships.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      "Real estate doesn't follow office hours. Reach us anytime — we're here to answer questions and keep your transaction on track.",
  },
]

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="text-center">
                <Icon size={48} className="mx-auto mb-4 text-sky-500" strokeWidth={1.5} />
                <h3 className="mb-3 font-serif text-xl font-bold text-black">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
