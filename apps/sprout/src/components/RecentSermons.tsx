import { recentSermons } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function RecentSermons() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Recent Sermons</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentSermons.map((item) => (
            <div
              key={item.title}
              className="rounded-none bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mb-4 text-sm text-brand">{item.speaker}</p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="#"
                  className="rounded-none bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-hover"
                >
                  Watch Sermons
                </ButtonLink>
                <ButtonLink
                  href="#"
                  className="rounded-none border border-brand px-4 py-2 text-xs font-semibold text-brand hover:bg-brand hover:text-white"
                >
                  Download Sermons
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
