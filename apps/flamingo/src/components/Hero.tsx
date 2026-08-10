import { Calendar, MessageCircle } from 'lucide-react'
import { featuredPosts, imgUrl } from '../data'

export function Hero() {
  return (
    <section aria-label="Featured posts" className="bg-white py-[60px]">
      <div className="mx-auto flex max-w-7xl snap-x snap-mandatory gap-[30px] overflow-x-auto px-4 pb-2 sm:px-6 md:grid md:grid-cols-2 md:snap-none md:overflow-visible lg:grid-cols-4">
        {featuredPosts.map((post) => (
          <article
            key={post.seed}
            className="group relative h-[420px] w-[85%] shrink-0 snap-center overflow-hidden bg-heading md:w-auto md:shrink"
          >
            <img
              src={imgUrl(post.seed, 600, 750)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* deep-purple overlay rgba(42,20,112,0.5) from the original */}
            <div className="absolute inset-0 bg-[rgba(42,20,112,0.5)] transition-colors group-hover:bg-[rgba(42,20,112,0.35)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <a
                href="#"
                className="inline-block rounded-[15px] border border-primary px-[18px] text-xs leading-7 text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {post.category}
              </a>
              <h4 className="mt-3 font-heading text-2xl leading-[30px] font-medium">
                <a
                  href="#"
                  className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {post.headline}
                </a>
              </h4>
              <p className="mt-2 text-sm leading-6 text-white/85">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-5 border-t border-white/20 pt-3 text-xs text-white">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.comments}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
