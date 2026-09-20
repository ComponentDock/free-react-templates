const professors = [
  {
    name: 'Olivia Young',
    specialty: 'Web Development',
    image: 'https://picsum.photos/seed/cognita-prof1/300/300',
  },
  {
    name: 'Daniel Anderson',
    specialty: 'Data Science',
    image: 'https://picsum.photos/seed/cognita-prof2/300/300',
  },
  {
    name: 'David Brook',
    specialty: 'Digital Marketing',
    image: 'https://picsum.photos/seed/cognita-prof3/300/300',
  },
  {
    name: 'Brigeth Smith',
    specialty: 'Mobile Development',
    image: 'https://picsum.photos/seed/cognita-prof4/300/300',
  },
]

export function Professors() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          Our Experienced Professors
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {professors.map((p) => (
            <div key={p.name} className="text-center">
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-heading">{p.name}</h3>
              <p className="text-sm text-body">{p.specialty}</p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href="#twitter"
                  aria-label={`${p.name} on Twitter`}
                  className="text-xs text-gray-400 hover:text-primary-500"
                >
                  𝕏
                </a>
                <a
                  href="#facebook"
                  aria-label={`${p.name} on Facebook`}
                  className="text-xs text-gray-400 hover:text-primary-500"
                >
                  f
                </a>
                <a
                  href="#linkedin"
                  aria-label={`${p.name} on LinkedIn`}
                  className="text-xs text-gray-400 hover:text-primary-500"
                >
                  in
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
