import { ButtonLink } from '@free-react-templates/ui'
import { causes } from '../data'

export function Causes() {
  return (
    <section id="causes" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-widest text-teal">
            Our Causes
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl dark:text-white">
            Fundraising Programs
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {causes.map((cause) => (
            <article
              key={cause.title}
              className="border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={cause.image} alt={cause.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-navy dark:text-white">
                  {cause.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink">
                  {cause.paragraph}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm dark:border-gray-800">
                  <span className="text-ink">
                    Goal <span className="font-medium text-navy dark:text-white">{cause.goal}</span>
                  </span>
                  <span className="text-ink">
                    Raised <span className="font-medium text-brand">{cause.raised}</span>
                  </span>
                </div>
                <ButtonLink
                  href="#contact"
                  className="mt-5 w-full rounded-none bg-brand px-4 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-flame"
                >
                  Donate
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
