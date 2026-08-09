import { Clock, Flame, Mail, MapPin, Phone } from 'lucide-react'

const serviceTimes = [
  { day: 'Wednesdays', name: 'Elevate Night', time: '6:30 PM' },
  { day: 'Sundays', name: 'MS Hangout', time: '9:00 AM' },
  { day: 'Sundays', name: 'HS Connect', time: '11:00 AM' },
] as const

const columns = [
  {
    title: 'Get Involved',
    links: ['Upcoming Events', 'Find a Group', 'Volunteer', 'Give'],
  },
  {
    title: 'Resources',
    links: ['Watch Messages', 'Podcast', 'Devotionals', 'Parent Info'],
  },
  {
    title: 'Connect',
    links: ['Contact Us', 'Instagram', 'YouTube', 'TikTok'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand + service times */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Ignite Youth home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500">
                <Flame className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-wide text-white">
                Ignite Youth
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              A Christ-centered youth ministry helping students rise higher together through
              authentic community and relevant faith.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              {serviceTimes.map((service) => (
                <p key={service.name} className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                  <span className="w-24 font-semibold text-white">{service.day}</span>
                  <span className="text-gray-400">{service.name}</span>
                  <span className="ml-auto font-semibold text-white">{service.time}</span>
                </p>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Location */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Location
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  2500 Faith Avenue
                  <br />
                  Riverside, CA 92501
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
                <a
                  href="mailto:youth@igniteyouth.church"
                  className="transition-colors hover:text-white"
                >
                  youth@igniteyouth.church
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="tel:+15557890123" className="transition-colors hover:text-white">
                  (555) 789-0123
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ignite Youth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
