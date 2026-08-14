interface SiteHalfProps {
  image: string
  eyebrow: string
  heading: string
  paragraphs: readonly string[]
  flipped?: boolean
}

/** Alternating image/text band: half-width photo column beside a content
 *  column with eyebrow, uppercase heading and two paragraphs. `flipped`
 *  moves the image to the right. */
export function SiteHalf({ image, eyebrow, heading, paragraphs, flipped = false }: SiteHalfProps) {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {!flipped && (
          <div className="lg:col-start-1">
            <img
              src={image}
              alt={`${heading} illustration`}
              className="h-64 w-full object-cover lg:h-[420px]"
              loading="lazy"
            />
          </div>
        )}
        <div className={flipped ? 'lg:col-start-1' : ''}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/50">{eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold uppercase text-black">
            {heading}
          </h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-black/60">
              {paragraph}
            </p>
          ))}
        </div>
        {flipped && (
          <div className="lg:col-start-2">
            <img
              src={image}
              alt={`${heading} illustration`}
              className="h-64 w-full object-cover lg:h-[420px]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  )
}
