import { sermon } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Sermon() {
  return (
    <section id="sermons" className="bg-light-bg py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Featured Sermon</h2>
        <div className="rounded-none bg-white p-8 shadow-sm sm:p-10">
          <h3 className="mb-3 text-xl font-bold text-ink">{sermon.title}</h3>
          <p className="mb-2 text-sm font-medium text-brand">{sermon.speaker}</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {sermon.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-none bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
              >
                {cat}
              </span>
            ))}
          </div>
          <p className="mb-2 text-xs text-gray-400">{sermon.date}</p>
          <p className="mb-6 text-sm leading-relaxed text-body">{sermon.description}</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="#"
              className="rounded-none bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Watch Sermons
            </ButtonLink>
            <ButtonLink
              href="#"
              className="rounded-none border border-brand px-6 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
            >
              Download Sermons
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
