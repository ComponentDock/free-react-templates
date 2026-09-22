import { Phone, MessageCircle } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const doctors = [
  {
    name: 'Dr Adam Brain',
    specialty: 'Cardiologist',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/carepath-team-1/400/400',
  },
  {
    name: 'Dr Sarah Chen',
    specialty: 'Cardiologist',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/carepath-team-2/400/400',
  },
  {
    name: 'Dr Michael Reed',
    specialty: 'Cardiologist',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/carepath-team-3/400/400',
  },
]

export function Team() {
  return (
    <section id="team" className="py-20" aria-label="Team">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold font-serif text-heading md:text-4xl">
            CarePath Experience Doctors
          </h2>
          <p className="text-body-text leading-relaxed">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set. Land meat winged called subdue without very light in all
            years sea appear.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="mb-1 text-lg font-bold text-heading">
                  <a href="#" className="hover:text-brand transition-colors">
                    {doctor.name}
                  </a>
                </h3>
                <p className="mb-4 text-sm text-body-text">{doctor.specialty}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex items-center gap-1 text-xs text-body-text hover:text-brand transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {doctor.phone}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-body-text hover:text-brand transition-colors"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="text-body-text hover:text-brand transition-colors"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-body-text hover:text-brand transition-colors"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="Skype"
                      className="text-body-text hover:text-brand transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
