const FacebookIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)
const InstagramIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)
const LinkedinIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const dentists = [
  { name: 'Dr. John Doe', role: 'Lead Dentist' },
  { name: 'Dr. Jane Smith', role: 'Orthodontist' },
  { name: 'Dr. Mike Johnson', role: 'Oral Surgeon' },
  { name: 'Dr. Sarah Wilson', role: 'Pediatric Dentist' },
]

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Team() {
  return (
    <section id="team" className="bg-tooth-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-tooth-teal">
            Dentist
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tooth-dark-blue">Our Qualified Dentist</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dentists.map(({ name, role }) => (
            <div key={name} className="group overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${name.replace(/\s/g, '').toLowerCase()}/400/400`}
                  alt={name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-tooth-dark-blue">{name}</h3>
                <p className="mt-1 text-sm text-tooth-muted">{role}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {socialIcons.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-tooth-teal-light text-tooth-teal transition-colors hover:bg-tooth-teal hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
