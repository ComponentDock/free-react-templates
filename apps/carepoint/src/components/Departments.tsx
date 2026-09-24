const departments = [
  {
    name: 'Plastic Surgery',
    doctor: 'Dr. James Smith',
    image: 'https://picsum.photos/seed/carepoint-dept1/300/300',
  },
  {
    name: 'Gastroenterology',
    doctor: 'Dr. Gunter Roscoe',
    image: 'https://picsum.photos/seed/carepoint-dept2/300/300',
  },
  {
    name: 'Dentistry',
    doctor: 'Dr. Maria Williams',
    image: 'https://picsum.photos/seed/carepoint-dept3/300/300',
  },
]

export function Departments() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/carepoint-dept-bg/1920/600)',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Medical Departments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div key={dept.name} className="bg-white rounded-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold uppercase tracking-wider">
                    View Department
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-dark-text capitalize">{dept.name}</h3>
                <p className="text-body text-sm">{dept.doctor}</p>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <p className="text-body mb-4">
              Discover our full range of specialized medical departments and find the care you need.
            </p>
            <a
              href="#departments"
              className="inline-block border-2 border-brand-green text-dark-text font-semibold uppercase tracking-wider px-6 py-2 rounded hover:bg-brand-green hover:text-white transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
