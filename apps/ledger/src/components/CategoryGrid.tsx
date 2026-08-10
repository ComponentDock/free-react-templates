import { categoryPosts, imgUrl } from '../data'
import { PostIconRow } from './PostIconRow'

export function CategoryGrid() {
  return (
    <section aria-label="Categories" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-[70px] pb-[50px] md:grid-cols-3">
        {categoryPosts.map((post) => (
          <article key={post.seed}>
            <div className="relative">
              <img
                src={imgUrl(post.seed, 700, 470)}
                alt={post.title}
                className="w-full"
                loading="lazy"
              />
              <a
                href="#"
                className="absolute bottom-[-5px] left-0 rounded-tr-[10px] bg-white px-[30px] py-[15px] text-[11px] font-semibold uppercase text-brand"
              >
                {post.pill}
              </a>
            </div>
            <div className="mt-[21px] mb-[55px]">
              <p className="text-[13px] text-meta">{post.meta}</p>
              <a href="#">
                <h3 className="mt-3 font-display text-2xl text-ink transition-colors hover:text-brand">
                  {post.title}
                </h3>
              </a>
              <PostIconRow />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
