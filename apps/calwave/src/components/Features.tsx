import { Bell, BarChart3, RefreshCw } from 'lucide-react'

const FEATURES = [
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description:
      'Keep your calendar in sync across all your devices. Changes propagate instantly so you never miss an update.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'Set custom reminders for important events. Get notified at just the right time with intelligent scheduling.',
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    description:
      'Track your productivity with built-in analytics. See where your time goes and optimize your schedule.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-[--color-heading]">
          Powerful Features
        </h2>
        <p className="mb-12 text-center text-[--color-body]">
          Everything you need to manage your schedule effectively
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl border border-[--color-border] bg-[--color-card] p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[--color-year]/10 text-[--color-accent]">
                <feature.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[--color-heading]">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[--color-body]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
