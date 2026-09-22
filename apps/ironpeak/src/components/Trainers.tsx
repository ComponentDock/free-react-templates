const trainers = [
  {
    name: 'Mellisa Howard',
    role: 'Gym Trainer',
    image: 'https://picsum.photos/seed/ironpeak-trainer1/400/400',
  },
  {
    name: 'Mike Richardson',
    role: 'Gym Trainer',
    image: 'https://picsum.photos/seed/ironpeak-trainer2/400/400',
  },
  {
    name: 'Charles White',
    role: 'Gym Trainer',
    image: 'https://picsum.photos/seed/ironpeak-trainer3/400/400',
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-ink">
          Expert Trainers
        </h2>
        <span className="text-6xl font-extrabold uppercase tracking-wider text-gray-100">
          Our Trainers
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="text-center">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="mx-auto h-64 w-64 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 text-lg font-bold text-ink">{trainer.name}</h3>
            <p className="text-sm font-light text-muted">{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
