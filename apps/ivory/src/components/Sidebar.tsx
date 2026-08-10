import { recentPosts, sidebar, tagPills } from '../data'

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="mt-[110px] w-full lg:mt-[290px] lg:w-[290px]">
      <div className="text-center">
        <h2 className="font-sans text-[30px] font-medium text-ink dark:text-gray-100">
          {sidebar.author}
        </h2>
        <p className="mt-9 text-sm leading-[1.85rem] text-meta dark:text-gray-400">
          {sidebar.blurb}
        </p>
      </div>

      <div className="mt-12">
        {recentPosts.map((post) => (
          <article key={post.seed} className="mt-10 text-center sm:text-left">
            <img
              src={`https://picsum.photos/seed/${post.seed}/400/250`}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
            <p className="mt-6 text-[11px] uppercase tracking-[0.08rem] text-meta dark:text-gray-400">
              {post.date}
            </p>
            <h3 className="mt-2 font-sans text-lg font-medium text-ink dark:text-gray-100">
              <a href="#blog" className="transition-colors hover:text-meta">
                {post.title}
              </a>
            </h3>
            <div className="mt-3 text-xs text-meta dark:text-gray-400">
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href="#blog"
                  className="mr-2 transition-colors hover:text-ink dark:hover:text-gray-200"
                >
                  {tag}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 text-center sm:text-left">
        {tagPills.map((tag, index) => (
          <a
            key={`${tag}-${index}`}
            href="#blog"
            className="mb-2 mr-2 inline-block bg-ink px-6 py-3.5 text-[11px] uppercase tracking-[0.08rem] text-white transition-opacity hover:opacity-80 dark:bg-gray-800"
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="mt-24 text-center">
        <img
          src={`https://picsum.photos/seed/${sidebar.adSeed}/300/250`}
          alt="Advertisement"
          className="h-auto w-full object-cover"
        />
      </div>
    </aside>
  )
}
