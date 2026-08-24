import { WifiOff, Headphones, Ban, SkipForward } from 'lucide-react'

const FEATURES = [
  {
    icon: WifiOff,
    title: 'Offline mode.',
    description: 'Save and listen anywhere.',
  },
  {
    icon: Headphones,
    title: 'High quality audio.',
    description: 'Enjoy the full range of sound.',
  },
  {
    icon: Ban,
    title: 'No ads.',
    description: 'Enjoy nonstop music.',
  },
  {
    icon: SkipForward,
    title: 'Unlimited skips.',
    description: 'Just tap skip.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Get ready for seamless online music
          </h2>
          <p className="mx-auto max-w-2xl text-brand-body">
            Sonority is a seamless integration that gives you the power to stream music — and get
            all the benefits you can&apos;t with just traditional music apps.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <feature.icon size={28} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-brand-dark">
                <a href="#features" className="transition-colors hover:text-brand-blue">
                  {feature.title}
                </a>
              </h3>
              <p className="text-brand-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
