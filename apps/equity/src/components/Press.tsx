import { pressItems } from '../data'

/** Press Releases section (reference `.site-section`): a heading beside a
 *  list of three news items, each with a thumbnail, linked title, date, and
 *  excerpt. */
export function Press() {
  return (
    <section id="press" aria-label="Press Releases" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-heading text-4xl font-bold text-[#25262a]">Press Releases</h2>

        <div className="mt-12 space-y-10">
          {pressItems.map(({ title, date, excerpt, image }) => (
            <article key={title + date} className="flex flex-col gap-6 sm:flex-row">
              <img src={image} alt="" className="h-44 w-full object-cover sm:w-64" loading="lazy" />
              <div>
                <h3 className="font-heading text-xl font-bold">
                  <a
                    href="#press"
                    className="text-[#25262a] transition-colors hover:text-primary-600"
                  >
                    {title}
                  </a>
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary-600">{date}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#939393]">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
