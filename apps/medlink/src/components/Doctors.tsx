const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    image: 'https://picsum.photos/seed/medlink-doc1/400/400',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Neurologist',
    image: 'https://picsum.photos/seed/medlink-doc2/400/400',
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Pediatrician',
    image: 'https://picsum.photos/seed/medlink-doc3/400/400',
  },
]

export function Doctors() {
  return (
    <section id="doctors" className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#76b900]">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-[#333333]">Meet Our Doctors</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <article
              key={doc.name}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={doc.image}
                alt={`Photo of ${doc.name}`}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#333333]">{doc.name}</h3>
                <p className="mt-1 text-sm text-[#76b900]">{doc.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
