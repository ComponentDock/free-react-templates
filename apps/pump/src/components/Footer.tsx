import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socials = ['facebook', 'twitter', 'instagram'] as const

const services = ['Body Building', 'Aerobic Classes', 'Weight Lifting', 'Yoga Classes'] as const

const recentPosts = [
  'Young Women Doing Abdominal',
  '5 Exercises To Fix Your Posture',
  'Meal Prep For A Lean Week',
] as const

export function Footer() {
  return (
    <footer className="bg-night py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              About Us
            </h3>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-white">Pump</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#home"
                  aria-label={`Pump on ${social}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Recent blog posts">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Recent Blog
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {recentPosts.map((post) => (
                <li key={post}>
                  <a href="#blog" className="text-gray-400 transition-colors hover:text-brand">
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a href="#schedule" className="text-gray-400 transition-colors hover:text-brand">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Have a Questions?
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@pump.example
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Pump — All rights reserved
        </div>
      </div>
    </footer>
  )
}
