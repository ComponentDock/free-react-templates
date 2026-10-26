import type { Guide } from '../data/guides'

/**
 * One full-bleed photo card: the photograph is the entire surface, a four-stop
 * scrim keeps the copy legible, and the destination, title and blurb stack at
 * the bottom. The blurb and the two fact chips live in a panel collapsed to
 * `0fr` that opens on hover or focus — inside a card whose height never moves,
 * so the kicker and title rise up the photo instead of the card growing.
 *
 * The scrim's middle stops are deeper than the reference's and the pill's fill
 * is heavier: both clear 4.5:1 on a bright photograph, where the original's
 * 35 % / 45 % did not.
 */
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="guide-card group relative flex min-h-[440px] items-end overflow-hidden rounded-[22px] bg-card-fallback text-[15px] leading-[1.5] text-white [isolation:isolate]">
      <img
        className="guide-card__img absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:scale(1.07)] group-focus-within:[transform:scale(1.07)]"
        src={guide.image}
        width={560}
        height={720}
        alt={guide.alt}
        loading="lazy"
        decoding="async"
      />
      <div
        className="guide-card__shade absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,.55)_55%,rgba(0,0,0,.92)_100%)] transition-colors duration-[400ms] group-hover:bg-black/25 group-focus-within:bg-black/25"
        aria-hidden="true"
      />
      <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-black/60 px-3 py-1.5 text-[13px] font-medium text-white backdrop-blur-[6px]">
        {guide.tag}
      </span>
      <div className="w-full px-[22px] pb-6 pt-[22px]">
        <p className="m-0 mb-1 text-[13px] font-medium uppercase tracking-[.08em] text-accent [text-shadow:0_1px_2px_rgba(0,0,0,.6)]">
          {guide.place}
        </p>
        <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] [text-shadow:0_1px_3px_rgba(0,0,0,.5)]">
          <a className="guide-card__link text-inherit no-underline" href="#">
            {guide.title}
          </a>
        </h2>
        <div className="guide-card__more grid grid-rows-[0fr] opacity-0 [transition:grid-template-rows_.45s_ease,opacity_.35s_ease] group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
          <div className="min-h-0 overflow-hidden">
            <p className="mb-0 mt-2.5 text-[15px] text-card-text">{guide.blurb}</p>
            <p className="mb-0 mt-3 flex gap-2">
              {guide.facts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full bg-accent px-2.5 py-1 text-[12.5px] font-bold leading-[1.5] text-accent-ink"
                >
                  {fact}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
