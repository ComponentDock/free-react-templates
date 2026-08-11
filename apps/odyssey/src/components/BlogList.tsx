import { Calendar, Coffee, Image as ImageIcon, MessageCircle } from 'lucide-react'
import {
  authorName,
  blogPosts,
  continueReadingLabel,
  nextPageLabel,
  pageLinkLabel,
  paginationLabel,
  paginationPages,
  postCategory,
  postComments,
  postDate,
  postMetaLabel,
  postType,
  prevPageLabel,
} from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function BlogList() {
  return (
    <section aria-label="Blog posts" className="py-16 md:py-[120px]">
      <div className="space-y-14 lg:ml-[70px]">
        {blogPosts.map((post) => (
          <article key={post.seed} className="mb-14">
            <a href="#" aria-label={post.title} className="block">
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/450`}
                alt={post.title}
                className="h-64 w-full object-cover md:h-80"
              />
            </a>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
              <a href="#" className="transition-colors hover:text-brand">
                {post.title}
              </a>
            </h3>
            <p className="mt-4 leading-relaxed text-ink/70">{post.excerpt}</p>
            <div className="mt-6">
              <ButtonLink
                href="#"
                className="rounded-full border border-soft bg-mist px-7 text-xs font-medium normal-case text-ink hover:border-brand hover:bg-brand hover:text-white"
              >
                {continueReadingLabel}
              </ButtonLink>
            </div>
            <div className="mt-8 rounded-md bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/seed/odyssey-author/48/48"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink">
                    {authorName}
                  </p>
                  <ul
                    aria-label={postMetaLabel}
                    className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-wide text-meta"
                  >
                    <li className="flex items-center gap-1.5">
                      <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
                      {postDate}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ImageIcon aria-hidden="true" className="h-3.5 w-3.5" />
                      {postType}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Coffee aria-hidden="true" className="h-3.5 w-3.5" />
                      {postCategory}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                      {postComments}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <nav aria-label={paginationLabel} className="mt-4">
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <a
              href="#"
              aria-label={prevPageLabel}
              className="rounded-full border border-soft px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {prevPageLabel}
            </a>
          </li>
          {paginationPages.map((page) => (
            <li key={page}>
              <a
                href="#"
                aria-label={pageLinkLabel(page)}
                aria-current={page === '01' ? 'page' : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-soft text-xs font-medium text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              aria-label={nextPageLabel}
              className="rounded-full border border-soft px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {nextPageLabel}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
