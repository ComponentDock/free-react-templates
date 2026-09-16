const attorneys = [
  {
    name: 'John Anderson',
    role: 'Managing Attorney',
    img: 'https://picsum.photos/seed/chambers-atty1/400/500',
  },
  {
    name: 'Jane Smith',
    role: 'Senior Partner',
    img: 'https://picsum.photos/seed/chambers-atty2/400/500',
  },
  {
    name: 'Robert Wilson',
    role: 'Legal Advisor',
    img: 'https://picsum.photos/seed/chambers-atty3/400/500',
  },
  {
    name: 'Emily Davis',
    role: 'Associate Attorney',
    img: 'https://picsum.photos/seed/chambers-atty4/400/500',
  },
]

export function Attorneys() {
  return (
    <section id="attorneys" className="py-16 bg-bg-light" data-testid="attorneys">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Expert Attorneys</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{a.name}</h3>
                <p className="text-text-muted text-sm">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
