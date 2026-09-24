function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const DOCTORS = [
  { name: 'Dr. Melissa Smith', specialty: 'Cardiologist', seed: 'clinipoint-d1' },
  { name: 'Dr. Josh Henderson', specialty: 'Plastic Surgeon', seed: 'clinipoint-d2' },
  { name: 'Dr. Christinne Jones', specialty: 'Pediatrist', seed: 'clinipoint-d3' },
  { name: 'Dr. William Stan', specialty: 'General Practitioner', seed: 'clinipoint-d4' },
]

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-4">
            Our Doctors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.seed}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://picsum.photos/seed/${doctor.seed}/400/400`}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-brand-heading mb-1">
                  {doctor.name}
                </h5>
                <p className="text-brand-primary text-sm mb-4">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="text-brand-body hover:text-brand-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    className="text-brand-body hover:text-brand-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    className="text-brand-body hover:text-brand-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
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
