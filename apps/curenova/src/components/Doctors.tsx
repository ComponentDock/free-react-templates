const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    desc: 'Specialized in cardiovascular diseases with over 15 years of clinical experience.',
    img: 'https://picsum.photos/seed/curenova-doc1/400/400',
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Neurology',
    desc: 'Expert in neurological disorders and brain health with research credentials.',
    img: 'https://picsum.photos/seed/curenova-doc2/400/400',
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Pediatrics',
    desc: "Dedicated to children's health with a warm and compassionate approach.",
    img: 'https://picsum.photos/seed/curenova-doc3/400/400',
  },
] as const

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Doctors() {
  return (
    <section id="doctors" className="bg-band-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink-900">
          Well Experienced Doctors
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={doc.img}
                alt={doc.name}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink-900">{doc.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-400">{doc.specialty}</p>
                <p className="mt-2 text-sm text-mute-600">{doc.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#fb"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-mute-600 hover:bg-blue-400 hover:text-white"
                    aria-label={`${doc.name} on Facebook`}
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#tw"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-mute-600 hover:bg-blue-400 hover:text-white"
                    aria-label={`${doc.name} on Twitter`}
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#li"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-mute-600 hover:bg-blue-400 hover:text-white"
                    aria-label={`${doc.name} on LinkedIn`}
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
