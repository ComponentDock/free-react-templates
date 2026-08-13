import { BarChart3, Cloud, Globe, Inbox, Lightbulb, Monitor } from 'lucide-react'

const features = [
  {
    icon: Cloud,
    title: 'Expert Technicians',
    text: 'Certified engineers keep your servers tuned, patched, and monitored around the clock.',
  },
  {
    icon: Globe,
    title: 'Data Security',
    text: 'DDoS protection, SSL certificates, and daily backups guard your data by default.',
  },
  {
    icon: Monitor,
    title: '24/7 Support',
    text: 'A real human answers in under five minutes, every hour of every day.',
  },
  {
    icon: Inbox,
    title: 'Fast Servers',
    text: 'NVMe storage and low-latency networks keep your sites loading in a blink.',
  },
  {
    icon: BarChart3,
    title: 'Easy Setup',
    text: 'Deploy a site or a server in minutes with one-click installers and a clean panel.',
  },
  {
    icon: Lightbulb,
    title: 'Money Back Guarantee',
    text: 'Try any plan risk-free for 30 days — full refund if you are not satisfied.',
  },
] as const

/** Six feature cards on a white band. */
export function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink-900">Some Features that Made us Unique</h2>
          <p className="mt-4 text-sm leading-6 text-mute-500">
            Everything you need to launch and grow online, bundled into one platform and tuned by
            engineers who have run data centers at scale.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[10px] border border-line-200 p-8 transition-all duration-300 hover:border-transparent hover:shadow-[0px_10px_30px_0px_rgba(98,71,234,0.1)]"
            >
              <Icon className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-medium text-ink-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-mute-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
