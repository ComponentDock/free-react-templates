const instructors = [
  {
    name: 'Olivia Young',
    role: 'Instructor',
    image: 'https://picsum.photos/seed/erudit-inst1/400/400',
  },
  {
    name: 'Daniel Anderson',
    role: 'Instructor',
    image: 'https://picsum.photos/seed/erudit-inst2/400/400',
  },
  {
    name: 'David Brook',
    role: 'Instructor',
    image: 'https://picsum.photos/seed/erudit-inst3/400/400',
  },
  {
    name: 'Brigeth Smith',
    role: 'Instructor',
    image: 'https://picsum.photos/seed/erudit-inst4/400/400',
  },
]

export function Instructors() {
  return (
    <section id="teachers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Instructors</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((inst) => (
            <div key={inst.name} className="text-center group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{inst.name}</h3>
              <span className="text-sm text-gray-500">{inst.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
