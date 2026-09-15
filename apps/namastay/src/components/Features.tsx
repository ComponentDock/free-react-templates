import { Sparkles, Flower2, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Chakra',
    description:
      'Balance your energy centers and restore harmony to your life through guided chakra meditation.',
  },
  {
    icon: Flower2,
    title: 'Lotus',
    description: 'Find inner peace and spiritual growth with our lotus-inspired yoga practices.',
  },
  {
    icon: Dumbbell,
    title: 'Yoga',
    description: 'Strengthen your body and mind with dynamic yoga sequences for all levels.',
  },
]

export function Features() {
  return (
    <section className="border-t border-brand-light py-16" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Feature items */}
          <div className="flex flex-col justify-center gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <feature.icon size={40} className="shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-mist">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/namastay-feature/600/500"
              alt="Yoga practice"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
