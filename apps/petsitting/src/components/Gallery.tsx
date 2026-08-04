const pets = [
  { breed: 'Persian Cat', seed: 1 },
  { breed: 'Pomeranian', seed: 2 },
  { breed: 'Sphynx Cat', seed: 3 },
  { breed: 'British Shorthair', seed: 4 },
  { breed: 'Beagle', seed: 5 },
  { breed: 'Pug', seed: 6 },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Pets Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-gray-500 dark:text-gray-400">
          A few of the wonderful pets we have the pleasure of caring for.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {pets.map((pet) => (
            <figure
              key={pet.breed}
              className="overflow-hidden rounded-lg bg-paper text-center dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/petsitting-gallery-${pet.seed}/480/360`}
                alt={`A ${pet.breed} cared for by our sitters`}
                loading="lazy"
                className="h-48 w-full object-cover md:h-64"
              />
              <figcaption className="py-4 text-sm font-bold text-night dark:text-white">
                {pet.breed}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
