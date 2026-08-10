import { imgUrl, mostPopularRows, mostPopularTitle } from '../data'
import { SectionTitle } from './SectionTitle'

export function MostPopular() {
  return (
    <section aria-label={mostPopularTitle} className="mb-7">
      <SectionTitle className="px-5 py-3">{mostPopularTitle}</SectionTitle>
      <ul className="mt-4 flex flex-col gap-4 bg-white p-4">
        {mostPopularRows.map((post) => (
          <li key={`${post.seed}-${post.title}`} className="flex items-center gap-3">
            <img
              src={imgUrl(post.seed, 80, 60)}
              alt=""
              aria-hidden="true"
              className="h-[60px] w-20 shrink-0 object-cover"
            />
            <div>
              <h6 className="text-sm font-normal leading-snug text-heading">
                <a
                  href="#post"
                  className="transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                >
                  {post.title}
                </a>
              </h6>
              <p className="mt-1 text-xs font-light text-body">
                {post.meta.date} / {post.meta.comments} Comments
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
