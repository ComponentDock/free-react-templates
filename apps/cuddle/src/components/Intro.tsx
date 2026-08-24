import { Gift, Users, Heart } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: 'Start Donating',
    description: 'Make a difference today by donating to causes that matter most to you.',
  },
  {
    icon: Users,
    title: 'Join Our Community',
    description: 'Connect with like-minded individuals who share your passion for helping others.',
  },
  {
    icon: Heart,
    title: 'Be A Volunteer',
    description:
      'Give your time and skills to create lasting impact in the lives of those in need.',
  },
] as const

export function Intro() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/cuddle-about/800/600"
              alt="Children in classroom - education support"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
              We Help Thousands of Children to Get Their Education
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-sm text-mist">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
