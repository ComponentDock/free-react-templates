const pets = [
  { seed: 1, alt: 'Shelter pet 1' },
  { seed: 2, alt: 'Shelter pet 2' },
  { seed: 3, alt: 'Shelter pet 3' },
  { seed: 4, alt: 'Shelter pet 4' },
] as const

export function PetStrip() {
  return (
    <section
      className="relative z-10 -mt-24 bg-white pb-10 dark:bg-gray-950"
      aria-label="Shelter pets"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
        {pets.map((pet) => (
          <img
            key={pet.seed}
            src={`https://picsum.photos/seed/animal-shelter-${pet.seed}/360/280`}
            alt={pet.alt}
            className="h-44 w-full object-cover shadow-lg sm:h-52"
          />
        ))}
      </div>
    </section>
  )
}
