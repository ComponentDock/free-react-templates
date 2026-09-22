import { Brain, Heart, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Body & Mind Balance',
    description:
      'Achieve harmony between physical strength and mental clarity through our holistic yoga practices.',
  },
  {
    icon: Heart,
    title: 'Healthy Daily Life',
    description:
      'Incorporate yoga into your daily routine for improved energy, better sleep, and overall wellness.',
  },
  {
    icon: Zap,
    title: 'Improves Flexibility',
    description:
      'Progressive stretching sequences designed to increase your range of motion and prevent injury.',
  },
]

export function Features() {
  return (
    <section
      className="relative bg-gray-900 bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/zenbloom-parallax/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-xl text-sage-400">Zenbloom</p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Control Your Body To Free Your Soul
          </h2>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/zenbloom-yoga-pose/600/500"
            alt="Yoga pose demonstration"
            className="rounded-lg object-cover"
            loading="lazy"
          />
          <div className="space-y-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-sage-400 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-gray-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
