import { ATTORNEYS } from '../data'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons'

/* Attorneys — 4-column grid of attorney cards with photo, name, role,
   and social media icons on hover. */
export function Attorneys() {
  return (
    <section id="attorneys-section" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Our Legal Attorneys</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.name} className="group text-center">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={attorney.photo}
                  alt={attorney.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-3">
                    {[
                      { Icon: FacebookIcon, label: 'Facebook' },
                      { Icon: TwitterIcon, label: 'Twitter' },
                      { Icon: LinkedinIcon, label: 'LinkedIn' },
                      { Icon: InstagramIcon, label: 'Instagram' },
                    ].map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#home-section"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-brand"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{attorney.name}</h3>
              <p className="text-sm text-muted">{attorney.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
