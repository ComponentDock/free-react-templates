export function About() {
  return (
    <section id="about" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: icon + text */}
          <div>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand/30">
              <span className="text-4xl" role="img" aria-label="food">
                🍽️
              </span>
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-ink">
              Sed ut perspiciatis unde omnis iste natus
            </h2>
            <div className="mb-6 h-1 w-16 bg-brand" />
            <p className="leading-relaxed text-mist">
              Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Exercitation photo
              booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan
              exercitation photo booth et 8-bit kale chips proident chillwave deep vine laborum.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Aliquam veniam delectus, marfa eiusmod pinterest food truck mixtape PBR&amp;B.
              Cardigan literally bespoke, Banksy placeat normcore before they sold out Helvetica
              artisan.
            </p>
          </div>

          {/* Right: stacked images */}
          <div className="flex flex-col gap-4">
            <div
              className="h-56 rounded bg-cover bg-center sm:h-64"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/corkage-about1/600/400)',
              }}
            />
            <div
              className="h-56 rounded bg-cover bg-center sm:h-64"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/corkage-about2/600/400)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
