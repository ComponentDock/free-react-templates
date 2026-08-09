import { Badge } from '@free-react-templates/ui'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    credentials: 'Board Certified · 15+ Years',
    src: 'https://picsum.photos/seed/cura-doc-1/400/480',
  },
  {
    name: 'Dr. James Okafor',
    specialty: 'Neurologist',
    credentials: 'Board Certified · 12+ Years',
    src: 'https://picsum.photos/seed/cura-doc-2/400/480',
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Pediatrician',
    credentials: 'Board Certified · 10+ Years',
    src: 'https://picsum.photos/seed/cura-doc-3/400/480',
  },
  {
    name: 'Dr. David Alvarez',
    specialty: 'Orthopedic Surgeon',
    credentials: 'Fellowship Trained · 18+ Years',
    src: 'https://picsum.photos/seed/cura-doc-4/400/480',
  },
] as const

export function Doctors() {
  return (
    <section id="doctors" className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet Our Doctors
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A team of board-certified specialists dedicated to providing compassionate,
            evidence-based care.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={doctor.src}
                alt={doctor.name}
                className="aspect-[5/6] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{doctor.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {doctor.specialty}
                </p>
                <Badge className="mt-3 bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                  {doctor.credentials}
                </Badge>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
