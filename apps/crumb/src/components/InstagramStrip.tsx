import { imgUrl, instagramHandle, instagramHeading, instagramTiles } from '../data'

export function InstagramStrip() {
  return (
    <section aria-label={instagramHeading} className="py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-light text-ink">{instagramHeading}</h2>
        <p className="mt-1 text-[13px] font-medium uppercase tracking-[2px] text-primary">
          {instagramHandle}
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-1 md:grid-cols-6">
        {instagramTiles.map((seed) => (
          <img
            key={seed}
            src={imgUrl(seed, 300, 300)}
            alt=""
            className="aspect-square w-full object-cover"
          />
        ))}
      </div>
    </section>
  )
}
