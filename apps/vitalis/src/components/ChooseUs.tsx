import { Award, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Advanced equipment',
    copy: 'State-of-the-art devices for precise diagnostics and comfortable treatment.',
  },
  {
    icon: Award,
    title: 'Qualified doctors',
    copy: 'Board-certified surgeons with years of experience in cosmetic procedures.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified services',
    copy: 'Internationally certified clinics that meet the highest safety standards.',
  },
  {
    icon: HeartPulse,
    title: 'Emergency care',
    copy: 'Round-the-clock support and rapid response whenever you need us.',
  },
] as const

export function ChooseUs() {
  return (
    <section
      aria-label="Why choose us"
      className="bg-white py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Offer for you</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-brand transition-colors hover:bg-brand hover:text-white dark:bg-gray-900">
                <feature.icon className="h-9 w-9" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
