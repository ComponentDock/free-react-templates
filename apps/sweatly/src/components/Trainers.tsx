const trainers: ReadonlyArray<{ name: string; bio: string; image: string }> = [
  {
    name: 'Justin Daniel',
    bio: 'Head coach with a decade of strength and conditioning experience.',
    image: 'https://picsum.photos/seed/sweatly-person-1/200/200',
  },
  {
    name: 'Matthew Davidson',
    bio: 'Certified HIIT specialist who loves turning beginners into athletes.',
    image: 'https://picsum.photos/seed/sweatly-person-2/200/200',
  },
  {
    name: 'Anna Stevens',
    bio: 'Mobility and pilates expert focused on recovery and posture.',
    image: 'https://picsum.photos/seed/sweatly-person-3/200/200',
  },
  {
    name: 'Sofia Lopez',
    bio: 'Nutrition coach and group-class lead with an energy that is contagious.',
    image: 'https://picsum.photos/seed/sweatly-person-4/200/200',
  },
]

export function Trainers() {
  return (
    <section id="trainer" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Trainer</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">Our Trainers</h2>
          <p className="mt-4 text-muted">
            Meet the certified coaches who will push you, support you, and celebrate every
            milestone.
          </p>
        </div>

        <div className="grid gap-8 text-center md:grid-cols-4">
          {trainers.map((trainer) => (
            <article key={trainer.name}>
              <img
                src={trainer.image}
                alt={trainer.name}
                loading="lazy"
                className="mx-auto mb-6 h-[100px] w-[100px] rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-ink">{trainer.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#ccc]">Trainer</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{trainer.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
