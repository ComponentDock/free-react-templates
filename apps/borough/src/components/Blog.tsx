import { Heart } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section aria-label="Recent Blog" className="bg-mist px-4 py-28 sm:px-6" id="blog">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-[13px] font-bold uppercase text-brand">Our Blog</p>
          <h2 className="mt-1 text-[28px] font-bold leading-tight text-neutral-900 lg:text-[50px]">
            Recent Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={`${post.author}-${post.image}`}
              className="group mb-8 overflow-hidden rounded-[4px] bg-white shadow-[0_10px_25px_-13px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-[270px] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 rounded-[4px] bg-white/80 p-3 backdrop-blur-sm">
                  <img
                    src="https://picsum.photos/seed/borough-author/68/68"
                    alt=""
                    loading="lazy"
                    className="h-[34px] w-[34px] rounded-full object-cover"
                  />
                  <span className="text-[14px] font-bold text-neutral-900">{post.author}</span>
                  <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-brand">
                    <Heart aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-[30px]">
                <p className="text-[13px] text-[#999999]">
                  {post.metaDate} ·{' '}
                  <a href="#blog" className="hover:text-brand">
                    {post.comments}
                  </a>
                </p>
                <h3 className="mt-3 text-[20px] font-bold leading-snug text-neutral-900">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
