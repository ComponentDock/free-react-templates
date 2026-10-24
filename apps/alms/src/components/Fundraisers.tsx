import { Card } from '@free-react-templates/ui'
import { fundraisers } from '../data'

export function Fundraisers() {
  return (
    <section id="fundraisers" className="bg-band py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-light">Latest Fundraisers</h2>
          <p className="mt-4 text-body">
            Six programs taking donations this month. Each one is costed by the
            team that delivers it, and every figure below is updated weekly.
          </p>
          <a
            href="#fundraisers"
            className="mt-4 inline-block text-sm uppercase tracking-[0.14em] text-brand underline decoration-brand/60 underline-offset-4 hover:no-underline"
          >
            View All Fundraisers
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fundraisers.map((item) => {
            const percent = Math.round((item.raised / item.goal) * 100)
            return (
              <Card
                key={item.title}
                className="rounded-none border-0 bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-light leading-snug">
                    <a href="#fundraisers" className="text-ink transition-colors hover:text-brand">
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm text-body">{item.blurb}</p>
                  <div
                    className="mt-5 h-1 w-full rounded bg-line"
                    role="progressbar"
                    aria-label={`${item.title} funding progress`}
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-1 rounded bg-brand" style={{ width: `${percent}%` }} />
                  </div>
                  <p className="mt-4 text-sm italic text-soft">Last donation 1w ago</p>
                  <p className="mt-1 text-sm text-body">
                    ${item.raised.toLocaleString('en-US')} raised of $
                    {item.goal.toLocaleString('en-US')}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
