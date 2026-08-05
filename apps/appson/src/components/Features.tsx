import {
  Cloud,
  Compass,
  Infinity as InfinityIcon,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const features = [
  { title: 'Unlimited Features', icon: InfinityIcon, blurb: 'Everything you need ships included.' },
  { title: 'Cloud Storage', icon: Cloud, blurb: 'Your data stays safe and always in sync.' },
  { title: 'Modern Design', icon: Sparkles, blurb: 'Clean visuals crafted for today.' },
  { title: 'Android Platform', icon: Smartphone, blurb: 'Native feel on every Android device.' },
  { title: 'Strategy Solutions', icon: Compass, blurb: 'Built to grow with your ambitions.' },
  {
    title: 'Fully Responsive Design',
    icon: MonitorSmartphone,
    blurb: 'Flawless on every screen size.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-primary-600 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Best Features</h2>
          <p className="mt-4 leading-relaxed text-white/85">
            Every feature your app needs, ready out of the box.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur transition-colors hover:bg-white/15"
              >
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{feature.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
