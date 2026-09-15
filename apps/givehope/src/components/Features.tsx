import { HandHeart, Users, GraduationCap, Zap } from 'lucide-react'

const features = [
  {
    icon: HandHeart,
    title: 'Give Donation',
    description: 'Heaven fruitful lesser days appear creeping seasons so behold bearing days.',
  },
  {
    icon: Users,
    title: 'Become A Volunteer',
    description: 'Over appear creeping seasons so behold bearing days open.',
  },
  {
    icon: GraduationCap,
    title: 'Child Education',
    description: 'Days appear creeping seasons so behold bearing days open.',
  },
  {
    icon: Zap,
    title: 'Quick Fundraise',
    description: 'Creeping seasons so behold bearing days open heaven fruitful.',
  },
] as const

export function Features() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sub">Awesome Feature</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading sm:text-4xl">
            How Could You Help
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-lg border border-border p-6 transition-colors hover:border-primary-400/30"
            >
              <feature.icon className="h-10 w-10 shrink-0 text-primary-400" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold text-heading">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
