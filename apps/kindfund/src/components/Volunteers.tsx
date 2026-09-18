import { volunteers } from '../data'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

export function Volunteers() {
  return (
    <section className="bg-light py-20" id="volunteers">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl text-ink">Our Volunteer</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.map((vol) => (
            <div
              key={vol.name}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img src={vol.image} alt={vol.name} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-navy/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="mb-4 flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg text-ink">{vol.name}</h3>
                <p className="text-sm text-primary">{vol.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
