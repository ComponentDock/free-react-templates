const images = [
  { seed: 'lodgely-photo1', alt: 'Hotel photo 1' },
  { seed: 'lodgely-photo2', alt: 'Hotel photo 2' },
  { seed: 'lodgely-photo3', alt: 'Hotel photo 3' },
  { seed: 'lodgely-photo4', alt: 'Hotel photo 4' },
  { seed: 'lodgely-photo5', alt: 'Hotel photo 5' },
  { seed: 'lodgely-photo6', alt: 'Hotel photo 6' },
]

export function Photos() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Photos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <a key={img.seed} href="#" className="block overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${img.seed}/600/400`}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
