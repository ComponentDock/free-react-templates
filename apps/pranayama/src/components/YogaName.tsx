const styles = [
  {
    name: 'Hatha Yoga',
    description:
      'A gentle introduction to the most basic yoga postures. Perfect for beginners looking to build a solid foundation.',
  },
  {
    name: 'Power Yoga',
    description:
      'A fitness-based approach to vinyasa-style yoga that builds strength, flexibility, and stamina.',
  },
  {
    name: 'Ashtanga',
    description:
      'A rigorous and athletic style of yoga that follows a specific sequence of postures linked by breath.',
  },
] as const

export function YogaName() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Different Yoga</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Explore the diverse world of yoga and find the practice that resonates with your body
            and mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <div
              key={style.name}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-brand">{style.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
