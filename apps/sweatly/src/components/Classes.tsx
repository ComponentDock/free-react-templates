const classNames: ReadonlyArray<string> = [
  'Power Lifting',
  'HIIT Circuit',
  'Spin Cycling',
  'Boxing Basics',
  'Core Strength',
  'Zumba Dance',
  'CrossFit WOD',
  'Pilates Flow',
  'Kickboxing',
  'Yoga Stretch',
]

const trainers: ReadonlyArray<string> = [
  'Justin Daniel',
  'Matthew Davidson',
  'Anna Stevens',
  'Sofia Lopez',
]

interface ClassCard {
  name: string
  trainer: string
  duration: string
  image: string
}

const classCards: ReadonlyArray<ClassCard> = classNames.map((name, index) => ({
  name,
  trainer: trainers[index % trainers.length]!,
  duration: '30 minutes',
  image: `https://picsum.photos/seed/sweatly-class-${index + 1}/200/200`,
}))

export function Classes() {
  return (
    <section id="classes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Fitness Class</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">Our Classes</h2>
          <p className="mt-4 text-muted">
            Ten signature classes led by certified trainers — every session is thirty minutes of
            focused, effective work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {classCards.map((card) => (
            <article
              key={card.name}
              className="flex items-center gap-5 overflow-hidden rounded border border-gray-100 p-5 shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]"
            >
              <img
                src={card.image}
                alt=""
                loading="lazy"
                className="h-[100px] w-[100px] shrink-0 rounded object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-ink">{card.name}</h3>
                <p className="mt-1 text-sm text-[#aeaeae]">
                  By {card.trainer} · {card.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
