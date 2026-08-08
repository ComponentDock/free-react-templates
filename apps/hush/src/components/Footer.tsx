import { Mountain } from 'lucide-react'

const prayerTimes = [
  { name: 'Lauds', time: '6:30 AM' },
  { name: 'Midday Prayer', time: '12:00 PM' },
  { name: 'Vespers', time: '5:30 PM' },
  { name: 'Compline', time: '8:30 PM' },
] as const

const experienceLinks = ['Retreats', 'Spiritual Direction', 'Day Visits', 'Group Bookings'] as const
const exploreLinks = ['Sacred Spaces', 'Daily Office', 'Our Story', 'Resources'] as const
const connectLinks = ['Contact Us', 'Newsletter', 'Donate', 'Volunteer'] as const

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Join us in prayer strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-10 text-center lg:flex-row lg:justify-between lg:px-8">
          <p className="font-heading text-xl font-medium text-white">Join Us in Prayer</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            {prayerTimes.map((prayer) => (
              <p key={prayer.name}>
                <span className="text-stone-500">{prayer.name}</span>
                <span className="mx-2 text-stone-600">·</span>
                <span className="text-stone-200">{prayer.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2" aria-label="Hush home">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <Mountain className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-semibold text-white">
                Hush
                <span className="mt-0.5 block text-[10px] font-medium tracking-widest text-stone-500 uppercase">
                  A Sanctuary for the Soul
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              A contemplative retreat in the mountains — eighty acres of forest and meadow set apart
              for rest, prayer, and spiritual direction.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-400">
              <li>welcome@hushretreat.org</li>
              <li>(555) 234-5678</li>
              <li>1247 Monastery Road, Cedar Valley, OR 97330</li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Experience
              </h3>
              <ul className="mt-4 space-y-3">
                {experienceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#retreats"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Explore</h3>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#spaces"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Connect</h3>
              <ul className="mt-4 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#connect"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prayer schedule */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Daily Office
            </h3>
            <p className="mt-4 text-sm text-stone-400">
              All are welcome in the chapel, every day of the year.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              {prayerTimes.map((prayer) => (
                <li
                  key={prayer.name}
                  className="flex justify-between border-b border-white/10 pb-2"
                >
                  <span>{prayer.name}</span>
                  <span className="text-stone-200">{prayer.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="font-heading text-lg text-stone-400 italic">
            &ldquo;Come to me, all you who are weary and burdened, and I will give you rest.&rdquo;
          </p>
          <p className="mt-4 text-sm text-stone-500">
            © {new Date().getFullYear()} Hush Retreat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
