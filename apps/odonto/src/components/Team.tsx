const doctors = [
  {
    name: 'Dr. Lloyd Wilson',
    role: 'Head Dentist',
    img: 'https://picsum.photos/seed/odonto-doc1/400/400',
  },
  {
    name: 'Dr. Rachel Parker',
    role: 'Dentist',
    img: 'https://picsum.photos/seed/odonto-doc2/400/400',
  },
  { name: 'Dr. Ian Smith', role: 'Dentist', img: 'https://picsum.photos/seed/odonto-doc3/400/400' },
  {
    name: 'Dr. Alicia Henderson',
    role: 'Dentist',
    img: 'https://picsum.photos/seed/odonto-doc4/400/400',
  },
]

const socialIcons = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01' },
]

function SocialIconLink({
  label,
  path,
  doctorName,
}: {
  label: string
  path: string
  doctorName: string
}) {
  return (
    <a href="#" aria-label={`${doctorName} on ${label}`}>
      <svg
        className="w-4 h-4 text-gray-400 hover:text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  )
}

export function Team() {
  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Qualified Dentist</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img src={doc.img} alt={doc.name} className="w-full h-64 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                <p className="text-teal-500 text-sm mb-3">{doc.role}</p>
                <div className="flex justify-center gap-3">
                  {socialIcons.map((s) => (
                    <SocialIconLink key={s.label} {...s} doctorName={doc.name} />
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
