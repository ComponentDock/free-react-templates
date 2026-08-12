const boxes = [
  { label: 'Crossfit', image: 'https://picsum.photos/seed/barbell-lift/700/600', alt: '' },
  { label: 'WOD', image: 'https://picsum.photos/seed/barbell-summit/700/600', alt: '' },
  { label: 'Kids & Teens', image: 'https://picsum.photos/seed/barbell-box2/700/600', alt: '' },
] as const

export function Boxes() {
  return (
    <section aria-label="Training boxes" className="grid lg:grid-cols-3">
      {boxes.map((box) => (
        <div
          key={box.label}
          className="relative flex h-72 items-end justify-center overflow-hidden lg:h-[420px]"
        >
          <img
            src={box.image}
            alt={box.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
          <h1 className="relative z-10 pb-8 font-display text-6xl font-medium uppercase leading-[90%] text-white md:text-[110px]">
            {box.label}
          </h1>
        </div>
      ))}
    </section>
  )
}
