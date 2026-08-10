import { BrandIcon } from './BrandIcon'
import { blogPosts, shareLinks, socialLabels } from '../data'

export function BlogList() {
  return (
    <section aria-label="Blog posts" className="flex flex-col">
      {blogPosts.map((post) => (
        <article
          key={post.seed}
          className="content-wrap mt-[110px] text-center text-meta dark:text-gray-400"
        >
          <header>
            <p className="text-xs uppercase tracking-[0.08rem]">{post.date}</p>
            <h2 className="mt-3 font-sans text-[30px] font-medium leading-tight text-ink dark:text-gray-100">
              <a href="#blog" className="transition-colors hover:text-meta">
                {post.title}
              </a>
            </h2>
            <div className="mt-8 text-base">
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href="#blog"
                  className="mr-4 transition-colors hover:text-ink dark:hover:text-gray-200"
                >
                  {tag}
                </a>
              ))}
            </div>
          </header>

          <figure className="mt-10">
            <img
              src={`https://picsum.photos/seed/${post.seed}/900/560`}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
          </figure>

          <p className="mt-8 text-left text-sm leading-8">{post.excerpt}</p>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-4">
              <span className="text-lg">Share</span>
              <ul className="flex items-center gap-4" aria-label={`Share ${post.title}`}>
                {shareLinks.map((name) => (
                  <li key={name}>
                    <a
                      href="#blog"
                      aria-label={socialLabels[name]}
                      className="text-base text-meta transition-colors hover:text-ink dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <BrandIcon name={name} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#blog"
              className="block w-[200px] bg-ink py-5 text-center text-sm text-white transition-opacity hover:opacity-80 dark:bg-gray-800"
            >
              Read more
            </a>
            <a
              href="#comments"
              className="text-base text-meta transition-colors hover:text-ink lg:text-right dark:text-gray-400 dark:hover:text-gray-200"
            >
              {post.comments} Comments
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
