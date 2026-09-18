const FacebookIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const volunteers = [
  {
    name: 'David Phillips',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/givehope-vol1/400/500',
  },
  {
    name: 'Linda Rudolph',
    role: 'Field Supervisor',
    image: 'https://picsum.photos/seed/givehope-vol2/400/500',
  },
  {
    name: 'Samuel Gardner',
    role: 'Co-Founder',
    image: 'https://picsum.photos/seed/givehope-vol3/400/500',
  },
  {
    name: 'Rachel Adams',
    role: 'Outreach Lead',
    image: 'https://picsum.photos/seed/givehope-vol4/400/500',
  },
] as const

function SocialOverlay() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 bg-primary-400/80 py-3 opacity-0 transition-opacity group-hover:opacity-100">
      <a
        href="#"
        aria-label="Facebook"
        className="text-white transition-colors hover:text-white/80"
      >
        <FacebookIcon />
      </a>
      <a href="#" aria-label="Twitter" className="text-white transition-colors hover:text-white/80">
        <TwitterIcon />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-white transition-colors hover:text-white/80"
      >
        <InstagramIcon />
      </a>
    </div>
  )
}

export function Volunteers() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sub">Volunteers</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading sm:text-4xl">
            Expert Volunteers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((vol) => (
            <div key={vol.name} className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src={vol.image}
                  alt={vol.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
                <SocialOverlay />
              </div>
              <div className="py-4 text-center">
                <h3 className="font-display text-lg font-bold text-heading">{vol.name}</h3>
                <p className="mt-1 text-sm text-smoke">{vol.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
