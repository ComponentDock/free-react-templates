import { Flame, Heart, Leaf } from 'lucide-react'

const classes = [
  {
    title: 'Yoga',
    icon: Flame,
    description:
      'Flow through dynamic sequences that build strength, flexibility, and balance while calming the mind.',
  },
  {
    title: 'Pilates',
    icon: Heart,
    description:
      'Strengthen your core and improve posture with controlled movements and mindful breathing.',
  },
  {
    title: 'Hatha',
    icon: Leaf,
    description:
      'Explore foundational poses held for several breaths, perfect for building a solid yoga practice.',
  },
] as const

export function YogaClasses() {
  return (
    <section id="classes" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Our Classes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            We offer a variety of yoga classes to suit every level, from beginners to advanced
            practitioners.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => {
            const Icon = cls.icon
            return (
              <div
                key={cls.title}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{cls.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{cls.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
