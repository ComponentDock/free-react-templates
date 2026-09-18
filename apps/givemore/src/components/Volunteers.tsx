import { FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon } from './social-icons'
import { volunteers } from '../data'

export function Volunteers() {
  return (
    <section className="bg-light py-20" id="volunteers">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Volunteers</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink">Expert Volunteers</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((vol) => (
            <div key={vol.name} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative">
                <img src={vol.image} alt={vol.name} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-dark/0 opacity-0 transition-all group-hover:bg-dark/60 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-white transition-colors hover:text-primary"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-white transition-colors hover:text-primary"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-white transition-colors hover:text-primary"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Skype"
                    className="text-white transition-colors hover:text-primary"
                  >
                    <SkypeIcon />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg font-bold text-ink">{vol.name}</h3>
                <p className="text-sm text-gray-500">{vol.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
