import { WORK_CARDS } from '../data'

/* Works — centered heading + blurb and three horizontal portfolio cards
   (image left, text right on desktop; stacking on mobile), each with a
   "View Portfolio" pill button linking back to the featured grid. */
export function Works() {
  return (
    <section id="work" aria-label="Works" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Works</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            View our works below to see our design and way of development.
          </p>
        </div>

        <div className="mt-16 grid gap-12">
          {WORK_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-sm bg-white shadow-sm lg:flex-row"
            >
              <div className="lg:w-1/2">
                <img
                  src={card.image}
                  alt={`${card.title} case study`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                <h3 className="text-2xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{card.text}</p>
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex w-fit items-center rounded-full bg-sky px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-[#212529] transition-colors hover:bg-[#56caeb]"
                >
                  View Portfolio
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
