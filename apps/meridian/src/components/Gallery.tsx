import { GALLERY_HEADLINE, GALLERY_PARAGRAPH } from '../data'

/* Office gallery recreated from the source's gallery site-section: eyebrow
   + headline + paragraph, then an edge-to-edge three-column grid of six
   photos. */

export function Gallery() {
  return (
    <section className="bg-white pt-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <h5 className="eyebrow">Office Gallery</h5>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">{GALLERY_HEADLINE}</h2>
          </div>
          <p className="max-w-xl font-serif text-base font-light leading-relaxed text-ink">
            {GALLERY_PARAGRAPH}
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`https://picsum.photos/seed/meridian-office-${n}/800/600`}
            alt=""
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
