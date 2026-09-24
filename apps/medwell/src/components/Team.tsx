import { Phone } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const doctors = [
  {
    name: 'Dr. Adam Brain',
    specialty: 'Cardiologist',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/medwell-doc1/400/450',
  },
  {
    name: 'Dr. Blian Judge',
    specialty: 'Neurologist',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/medwell-doc2/400/450',
  },
  {
    name: 'Dr. Sarah Wells',
    specialty: 'Pediatrician',
    phone: '+7 235 365 2365',
    image: 'https://picsum.photos/seed/medwell-doc3/400/450',
  },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xs font-heading text-3xl font-bold leading-snug text-heading md:text-4xl">
            Medwell Experience Doctors
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-body">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="group overflow-hidden bg-white">
              <div className="overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-heading">{doc.name}</h3>
                <p className="mt-1 text-sm text-body">{doc.specialty}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <a
                    href={`tel:${doc.phone}`}
                    className="flex items-center gap-1 text-xs text-body transition-colors hover:text-brand-500"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {doc.phone}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-body transition-colors hover:text-brand-500"
                    >
                      <FacebookIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="text-body transition-colors hover:text-brand-500"
                    >
                      <TwitterIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-body transition-colors hover:text-brand-500"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" />
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
