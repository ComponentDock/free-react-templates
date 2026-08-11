import { featuredCards } from '../data'
import { PostChip, PostMeta, PostThumb } from './PostBits'

/* Three post-style-3 cards (reference `div.row.justify-content-center`):
   thumbnail under a 0.5 black overlay with centered chip + white 18px
   headline + meta. */
export function FeaturedCards() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredCards.map((post) => (
        <article
          key={post.title}
          className="group relative overflow-hidden bg-paper shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <PostThumb
            seed={post.seed}
            alt={post.title}
            width={400}
            height={260}
            className="w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-[15px] flex flex-col items-center justify-between text-center">
            <PostChip category={post.category} />
            <h3 className="font-heading text-lg font-bold text-white">
              <a href="#" className="transition-colors hover:text-white/80">
                {post.title}
              </a>
            </h3>
            <PostMeta author={post.author} date={post.date} className="border-0 text-white" />
          </div>
        </article>
      ))}
    </div>
  )
}
