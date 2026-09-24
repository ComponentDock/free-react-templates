const doctors = [
  { name: 'Dr. Jade Guzman', specialty: 'General Surgeon', initials: 'JG' },
  { name: 'Dr. Hannah Ford', specialty: 'Cardiologist', initials: 'HF' },
  { name: 'Dr. James Wilson', specialty: 'Neurologist', initials: 'JW' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            <span className="text-brand">Our Dedicated</span> Doctors
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/healnova-doc-${doctor.initials}/400/300`}
                alt={`Portrait of ${doctor.name}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-brand">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
