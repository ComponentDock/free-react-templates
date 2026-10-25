import { articles } from '../data'

/** Two distinct posts: thumbnail, date, uppercase grey title, excerpt and a blue read-more link. */
export function Articles() {
  return (
    <section id="blog" aria-label="Articles" className="bg-white py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            Articles
          </h2>
          <p className="mt-4 text-[16px] text-body">
            Notes from the desk on booking, clearing and claiming freight.
          </p>
        </div>

        <ul className="grid gap-[30px] lg:grid-cols-2">
          {articles.map((article) => (
            <li key={article.title}>
              <a href="#blog" className="block">
                <img
                  src={article.image}
                  alt={article.title}
                  width={1040}
                  height={650}
                  loading="lazy"
                  className="w-full rounded-[4px] object-cover"
                />
              </a>
              <p className="mt-6 text-[14px] text-body">{article.date}</p>
              <h3 className="mt-2 text-[24px] font-medium text-body uppercase">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {article.title}
                </a>
              </h3>
              <p className="mt-3 text-[16px] text-body">{article.excerpt}</p>
              <a href="#blog" className="mt-4 inline-block text-[16px] text-brand hover:underline">
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
