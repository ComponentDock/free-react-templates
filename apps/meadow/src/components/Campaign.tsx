import { Search } from 'lucide-react'
import { campaignCta, campaigns } from '../data'

export function Campaign() {
  return (
    <section id="campaign" data-testid="campaign-section" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
            Project
          </span>
          <h2 className="mt-2 text-4xl font-medium text-ink">Our Campaign</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((item) => (
            <article
              key={item.title}
              data-testid="campaign-card"
              className="group overflow-hidden rounded-sm bg-white"
            >
              <div className="relative h-[312px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-tl-full rounded-tr-full rounded-bl-full bg-white/80 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  <Search aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>

              <div className="p-6">
                <span className="inline-block rounded-sm bg-mint-soft px-3 py-1 text-[13px] font-medium uppercase text-brand">
                  {item.chip}
                </span>
                <h3 className="mt-3 text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>

                <div
                  role="progressbar"
                  aria-valuenow={item.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${item.title} progress`}
                  className="mt-5 h-2 w-full rounded-sm bg-mist"
                >
                  <div
                    className="h-full rounded-sm bg-brand"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[13px] font-medium text-brand">{item.percent}%</span>
                  <span className="mr-9 h-[34px] w-[34px] bg-brand" aria-hidden="true" />
                </div>
                <p className="mt-2 text-[13px] text-body">
                  Raised: {item.raised} / Goal: {item.goal}
                </p>
                <a
                  href="#donate"
                  className="mt-4 inline-block border border-brand bg-brand px-8 py-3 text-[13px] font-medium uppercase text-white transition-colors hover:bg-transparent hover:text-brand"
                >
                  {campaignCta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
