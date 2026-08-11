import { instagramSectionLabel, instagramSeeds, instagramTileLabel, instagramTitle } from '../data'

/* Instagram strip — #F7F7F7 band (padding 23px 0 in the original) with the
   centered "Follow us on Instagram @yourhotel" heading and four square
   thumbnails. */
export function InstagramStrip() {
  return (
    <section aria-label={instagramSectionLabel} className="bg-light py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-serif text-3xl font-medium text-heading sm:text-4xl lg:text-[48px]">
          {instagramTitle}
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {instagramSeeds.map((seed, index) => (
            <li key={seed}>
              <img
                src={`https://picsum.photos/seed/${seed}/400/300`}
                alt={instagramTileLabel(index)}
                className="h-40 w-full object-cover sm:h-52"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
