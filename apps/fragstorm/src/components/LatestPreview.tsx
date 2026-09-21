import { LATEST_REVIEWS } from '../data'

/* LatestPreview recreated from the source template's latest-preview-section:
   a grid of review-score cards with circular score indicators. */

export function LatestPreview() {
  return (
    <section id="latest" className="bg-body-bg py-20" aria-label="Latest game previews">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="section-title font-heading text-lg font-bold uppercase italic tracking-widest text-text-primary">
          <span className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-4 before:w-2.5 before:-skew-x-[15deg] before:bg-brand before:content-['']">
            Latest Preview
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {LATEST_REVIEWS.map((review) => (
            <article key={review.title} className="group">
              <div className="relative overflow-hidden rounded bg-nav-hover">
                <img
                  src={review.image}
                  alt={review.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Circular score indicator */}
                <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-body-bg/90">
                  <span className="text-xs font-bold text-brand">{review.score}</span>
                </div>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-text-primary">
                <a href="#" className="transition-colors hover:text-brand">
                  {review.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
