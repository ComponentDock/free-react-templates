import { imgUrl, instagramTiles, instagramTitle } from '../data'

export function InstagramFeed() {
  return (
    <section aria-label={instagramTitle} className="bg-white py-12">
      <h2 className="mb-8 text-center font-display text-base font-bold tracking-widest text-ink uppercase">
        {instagramTitle}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-1 px-4 sm:grid-cols-3 sm:px-6">
        {instagramTiles.map((tile) => (
          <a key={tile.seed} href="#" aria-label={tile.label} className="group relative block">
            <img
              src={imgUrl(tile.seed, 300, 300)}
              alt=""
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
