const breeds = [
  { name: 'German Shepherd', seed: 1 },
  { name: 'Labrador', seed: 2 },
  { name: 'Bulldog', seed: 3 },
  { name: 'Rottweiler', seed: 4 },
  { name: 'Beagle', seed: 5 },
  { name: 'Golden Retriever', seed: 6 },
] as const

export function Breeds() {
  return (
    <section id="breeds" className="border-t border-gray-200 py-20 dark:border-gray-800 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Dog Breed Collections
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Meet the breeds we know best — their temperament, care needs, and why they make such
            wonderful companions.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((breed) => (
            <article key={breed.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/breed-collection-${breed.seed}/600/400`}
                alt={breed.name}
                className="mx-auto w-full object-cover"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                {breed.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
