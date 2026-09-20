const images = [
  { seed: 'confetti-gal1', w: 600, h: 400, alt: 'Conference session 1' },
  { seed: 'confetti-gal2', w: 600, h: 400, alt: 'Conference session 2' },
  { seed: 'confetti-gal3', w: 800, h: 400, alt: 'Conference session 3' },
  { seed: 'confetti-gal4', w: 800, h: 400, alt: 'Conference session 4' },
  { seed: 'confetti-gal5', w: 600, h: 400, alt: 'Conference session 5' },
]

export function Gallery() {
  const [hero, ...rest] = images

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {hero && (
            <div className="col-span-2 row-span-2">
              <img
                src={`https://picsum.photos/seed/${hero.seed}/${hero.w}/${hero.h}`}
                alt={hero.alt}
                className="h-full w-full rounded object-cover"
              />
            </div>
          )}
          {rest.map((img) => (
            <div key={img.seed} className="col-span-1">
              <img
                src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
                alt={img.alt}
                className="h-full w-full rounded object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
