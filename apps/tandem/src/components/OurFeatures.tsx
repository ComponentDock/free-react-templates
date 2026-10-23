import { Bell, Layout, MonitorSmartphone } from 'lucide-react'

const items = [
  {
    title: 'Easy Notifications',
    icon: Bell,
    blurb: 'Timely, friendly alerts that keep users coming back without being pushy.',
  },
  {
    title: 'Fully Responsive',
    icon: MonitorSmartphone,
    blurb: 'One layout that adapts beautifully from the smallest phone to the widest screen.',
  },
  {
    title: 'Editable Layout',
    icon: Layout,
    blurb: 'Rearrange sections and content blocks to match your brand and story.',
  },
] as const

export function OurFeatures() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
            Our Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Approach to Design is Pretty Simple and Clear
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-paper p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <Icon className="mx-auto h-8 w-8 text-primary-600" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {item.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
