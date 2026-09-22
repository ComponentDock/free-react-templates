const trainers = [
  { name: 'Michael Stone', role: 'Strength Coach', seed: 'gymcore-trainer1' },
  { name: 'Sarah Chen', role: 'Yoga Instructor', seed: 'gymcore-trainer2' },
  { name: 'James Rivera', role: 'Cardio Specialist', seed: 'gymcore-trainer3' },
  { name: 'Emma Wilson', role: 'Nutrition Expert', seed: 'gymcore-trainer4' },
]

export function Team() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-ink md:text-4xl">
          Expert Trainers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${t.seed}/300/300`}
                alt={t.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
              />
              <h4 className="text-lg font-semibold text-ink">{t.name}</h4>
              <p className="text-sm text-mist">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
