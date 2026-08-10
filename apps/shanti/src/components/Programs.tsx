const programs = [
  {
    title: 'Group Lessons',
    blurb: 'Practice together, grow together — lively classes for every level.',
  },
  {
    title: 'Yoga For Beginners',
    blurb: 'Gentle foundations: postures, breathing and confidence from day one.',
  },
  {
    title: 'Yoga For Pregnant',
    blurb: 'Safe, nurturing movement designed for mums-to-be at any stage.',
  },
  {
    title: 'Yoga For Couples',
    blurb: 'Deepen your connection with partner flows and shared stillness.',
  },
  { title: 'Bikram Yoga', blurb: 'Sweat it out in the heat — a classic 26-posture sequence.' },
  { title: 'Yoga Barre', blurb: 'A sculpting fusion of ballet barre, pilates and yoga.' },
] as const

export function Programs() {
  return (
    <section id="schedule" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-normal tracking-[0.2em] text-body-500 uppercase">
            Yoga Classes
          </h3>
          <h2 className="mt-3 text-4xl font-extralight text-black sm:text-5xl">
            Choose Your Level &amp; Focus
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <a
              key={program.title}
              href="#classes"
              className="group relative block h-[400px] overflow-hidden rounded-sm"
            >
              <img
                src={`https://picsum.photos/seed/shanti-${index + 3}/600/800`}
                alt={program.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-mauve-500 opacity-0 transition-opacity duration-300 group-hover:opacity-50 group-focus-visible:opacity-50"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <h3 className="text-3xl font-medium text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">{program.blurb}</p>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
