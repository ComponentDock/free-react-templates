import { Bell, Cloud, Layout, MonitorSmartphone, PenLine, Zap } from 'lucide-react'

const features = [
  { title: 'Fast & Powerful', icon: Zap, blurb: 'Lightning-quick loads that keep users engaged.' },
  { title: 'Easily Editable', icon: PenLine, blurb: 'Tweak every section without touching code.' },
  { title: 'Cloud Storage', icon: Cloud, blurb: 'Your data stays safe and always in sync.' },
  { title: 'Easy Notifications', icon: Bell, blurb: 'Reach your audience the moment it matters.' },
  {
    title: 'Fully Responsive',
    icon: MonitorSmartphone,
    blurb: 'Pixel-perfect on phones, tablets, and desktops.',
  },
  { title: 'Editable Layout', icon: Layout, blurb: 'Arrange blocks to tell your story your way.' },
] as const

export function Features() {
  return (
    <section id="features" className="bg-primary-600 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-white/70">Features</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Powerful Features As Always
          </h2>
          <p className="mt-4 leading-relaxed text-white/85">
            Everything you need to impress users and grow downloads.
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
