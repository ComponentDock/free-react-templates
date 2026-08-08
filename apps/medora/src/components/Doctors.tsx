const doctors = [
  { name: 'Dr. Emily Carter', specialty: 'Cardiologist' },
  { name: 'Dr. James Okafor', specialty: 'Pediatrician' },
  { name: 'Dr. Sofia Marchetti', specialty: 'Orthopedic Surgeon' },
  { name: 'Dr. Daniel Reyes', specialty: 'Neurologist' },
] as const

export function Doctors() {
  return (
    <section id="doctors" aria-label="Doctors" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">Meet Our Doctors</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-mist">
          Experienced specialists who put your health first, every single day.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/medora-doctor-${index + 1}/400/300`}
                alt={`Portrait of ${doctor.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-bold text-ink">{doctor.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand">
                  {doctor.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
