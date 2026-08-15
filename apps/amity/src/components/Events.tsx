import { ProgressBar } from './ProgressBar'
import { events, featuredCause } from '../data'

export function Events() {
  return (
    <section aria-label="Events and featured cause" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="relative pb-6 text-[36px] font-semibold text-ink">Upcoming Events</h2>
          <span className="mb-8 block h-1 w-16 rounded-sm bg-brand" aria-hidden="true" />
          <div className="space-y-10">
            {events.map((event) => (
              <article
                key={event.title + event.image}
                aria-label={`Event: ${event.title}`}
                className="flex gap-6"
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="h-36 w-36 shrink-0 rounded-lg object-cover"
                />
                <div className="-mt-2.5">
                  <p className="flex items-center gap-3.5 text-[11px] font-medium text-ink">
                    <span className="border-r border-ink pr-3.5">{event.date}</span>
                    <span className="text-ink">{event.category}</span>
                  </p>
                  <h3 className="mt-2 text-[18px] font-semibold text-ink">{event.title}</h3>
                  <p className="mt-2 text-[14px] text-body">{event.excerpt}</p>
                  <a
                    href="#donate"
                    className="mt-3 inline-block text-[14px] font-semibold text-brand hover:text-brand-dark"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div aria-label="Featured cause">
          <h2 className="relative pb-6 text-[36px] font-semibold text-ink">Featured Cause</h2>
          <span className="mb-8 block h-1 w-16 rounded-sm bg-brand" aria-hidden="true" />
          <div className="bg-panel px-6 py-10">
            <img
              src={featuredCause.image}
              alt={featuredCause.alt}
              className="h-60 w-full rounded-lg object-cover"
            />
            <h3 className="mt-8 text-[18px] font-semibold text-ink">{featuredCause.title}</h3>
            <p className="mt-3 text-[14px] text-body">{featuredCause.excerpt}</p>
            <a
              href="#donate"
              className="mt-4 inline-block text-[14px] font-semibold text-brand hover:text-brand-dark"
            >
              Donate Now
            </a>
            <div className="mt-6">
              <ProgressBar percentage={featuredCause.percentage} />
              <p className="mt-3 text-[14px] text-body">
                <span>Raised: {featuredCause.raised}</span>
                <span aria-hidden="true"> / </span>
                <span>Goal: {featuredCause.goal}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
