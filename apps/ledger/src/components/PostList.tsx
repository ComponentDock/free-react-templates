import { ArrowRight } from 'lucide-react'
import { imgUrl, listPosts, loadingMoreLabel } from '../data'
import { PostIconRow } from './PostIconRow'

export function PostList() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        {listPosts.map((post) => (
          <article key={post.seed} className="flex flex-col border border-line lg:flex-row">
            <div className="relative shrink-0 lg:w-[300px]">
              <img
                src={imgUrl(post.seed, 470, 350)}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <a
                href="#"
                className="absolute right-0 bottom-0 rounded-tl-[10px] bg-white px-[30px] py-[15px] text-[11px] font-semibold uppercase text-brand"
              >
                {post.pill}
              </a>
            </div>
            <div className="flex-1 border-t border-line p-[35px_15px_40px_40px] lg:border-t-0 lg:border-l-0">
              <p className="text-[13px] text-meta">{post.meta}</p>
              <a href="#">
                <h3 className="mt-3 font-display text-xl text-ink transition-colors hover:text-brand">
                  {post.title}
                </h3>
              </a>
              <PostIconRow />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-block bg-brand px-[22px] py-[14.5px] text-[14px] text-white capitalize transition-colors duration-[0.4s] hover:bg-ink"
        >
          {loadingMoreLabel}
          <ArrowRight className="ml-1.5 inline h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
