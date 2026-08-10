import {
  blogLabel,
  blogPosts,
  bylinePrefix,
  commentsSuffix,
  continueReadingLabel,
  imgUrl,
  newerLabel,
  olderLabel,
  viewsSuffix,
} from '../data'
import { WavyDivider } from './WavyDivider'

export function BlogList() {
  return (
    <section aria-label={blogLabel}>
      {blogPosts.map((post, i) => (
        <article key={post.seed} className="group">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <img
              src={imgUrl(post.seed, 500, 380)}
              alt=""
              className="h-48 w-full shrink-0 object-cover md:h-[280px] md:w-1/2"
            />
            <div className="md:w-[44%]">
              <p className="text-[13px] font-medium uppercase tracking-[2px] text-primary">
                {`${post.date} / ${post.category}`}
              </p>
              <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-ink transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 text-sm italic text-meta">
                {`${bylinePrefix} ${post.author}`}
                {' · '}
                <span>{`${post.views} ${viewsSuffix}`}</span>
                {' · '}
                <span>{`${post.comments} ${commentsSuffix}`}</span>
              </p>
              <p className="mt-3 text-base leading-relaxed">{post.excerpt}</p>
              <a
                href="#home"
                className="mt-4 inline-block text-[13px] font-medium uppercase tracking-[2px] text-meta transition-colors hover:text-primary"
              >
                {continueReadingLabel}
              </a>
            </div>
          </div>
          {i < blogPosts.length - 1 && <WavyDivider />}
        </article>
      ))}

      <nav aria-label="Pagination" className="mt-10 flex items-center gap-3">
        <a
          href="#home"
          className="flex h-[30px] min-w-[80px] items-center justify-center bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-primary"
        >
          {newerLabel}
        </a>
        <a
          href="#home"
          className="flex h-[30px] min-w-[80px] items-center justify-center bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-primary"
        >
          {olderLabel}
        </a>
      </nav>
    </section>
  )
}
