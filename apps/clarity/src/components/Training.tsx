const trainings = [
  {
    image: 'https://picsum.photos/seed/coach1/400/300',
    title: 'Life Coach Training',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    image: 'https://picsum.photos/seed/coach2/400/300',
    title: 'Release Your Potential',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    image: 'https://picsum.photos/seed/coach3/400/300',
    title: 'Transforming Lives',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
]

export function Training() {
  return (
    <section id="training-section" className="bg-surface-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Life Coach Training</h2>
          <p className="text-gray-600">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training) => (
            <div key={training.title}>
              <figure className="mb-4">
                <img
                  src={training.image}
                  alt={training.title}
                  className="h-48 w-full rounded object-cover"
                  loading="lazy"
                />
              </figure>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{training.title}</h3>
              <p className="text-gray-600">{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
