const doctors = [
  {
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiology',
    description:
      'Board-certified cardiologist with over 15 years of experience in cardiovascular medicine.',
    photo: 'https://picsum.photos/seed/medvista-doc-1/400/300',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    description: 'Expert neurologist specializing in brain and nervous system disorders.',
    photo: 'https://picsum.photos/seed/medvista-doc-2/400/300',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Ophthalmology',
    description: 'Renowned ophthalmologist providing comprehensive eye care and surgery.',
    photo: 'https://picsum.photos/seed/medvista-doc-3/400/300',
  },
  {
    name: 'Dr. James Thompson',
    specialty: 'Dental',
    description: 'Experienced dental surgeon offering cosmetic and restorative dentistry.',
    photo: 'https://picsum.photos/seed/medvista-doc-4/400/300',
  },
] as const

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Doctors() {
  return (
    <section id="doctors" className="bg-white py-20" data-testid="doctors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink">Our Qualified Doctors</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Meet our team of experienced medical professionals dedicated to providing you with the
            best healthcare services possible.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doc.photo}
                  alt={`Photo of ${doc.name}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-ink">{doc.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  {doc.specialty}
                </p>
                <p className="mt-3 text-sm text-body">{doc.description}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    aria-label={`Twitter profile of ${doc.name}`}
                    className="text-gray-400 hover:text-brand"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Facebook profile of ${doc.name}`}
                    className="text-gray-400 hover:text-brand"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Google profile of ${doc.name}`}
                    className="text-gray-400 hover:text-brand"
                  >
                    <GoogleIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Instagram profile of ${doc.name}`}
                    className="text-gray-400 hover:text-brand"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="border-t px-6 py-3">
                <a
                  href="#appointment"
                  className="block text-center text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
                >
                  Book now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
