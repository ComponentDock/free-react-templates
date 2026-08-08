import { ChevronRight, Heart, MapPin, Users } from 'lucide-react'

const ways = [
  {
    title: 'Plan Your Visit',
    blurb: "New to Congregate? We'd love to help you feel at home. Let us know you're coming!",
    link: 'Plan Visit',
    href: '#service-times',
    Icon: MapPin,
  },
  {
    title: 'Join a Group',
    blurb: 'Life is better together. Find a small group to grow in faith and build friendships.',
    link: 'Find a Group',
    href: '#connect',
    Icon: Users,
  },
  {
    title: 'Serve with Us',
    blurb: "Use your gifts to make a difference. There's a place for you on our volunteer teams.",
    link: 'Start Serving',
    href: '#connect',
    Icon: Heart,
  },
  {
    title: 'Next Steps',
    blurb: 'Ready to go deeper? Discover the next step in your faith journey.',
    link: 'Explore Next Steps',
    href: '#connect',
    Icon: ChevronRight,
  },
] as const

export function GetInvolved() {
  return (
    <section id="connect" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          Get Involved
        </p>
        <h2 className="mt-3 text-3xl font-bold text-charcoal-900 dark:text-white sm:text-4xl">
          Ways to Connect
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-charcoal-600 dark:text-charcoal-300">
          No matter where you are in your faith journey, there&apos;s a next step for you at
          Congregate.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way) => (
            <div key={way.title} className="rounded-lg bg-charcoal-50 p-6 dark:bg-charcoal-800">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <way.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-charcoal-900 dark:text-white">
                {way.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                {way.blurb}
              </p>
              <a
                href={way.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400"
              >
                {way.link}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
