import { cn } from '@free-react-templates/ui'
import { heroColumns, imgUrl, type Post } from '../data'
import { CategoryPill } from './CategoryPill'

interface HeroCardProps {
  post: Post
  tall?: boolean
  className?: string
}

function HeroCard({ post, tall = false, className }: HeroCardProps) {
  return (
    <a
      href="#top"
      className={cn(
        'group relative block overflow-hidden',
        tall ? 'h-full min-h-[464px]' : 'h-56',
        className,
      )}
    >
      <img
        src={imgUrl(post.seed, 600, tall ? 900 : 400)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        {post.categories.length > 0 ? (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <CategoryPill key={category.label} label={category.label} color={category.color} />
            ))}
          </div>
        ) : null}
        <h2 className="text-lg font-bold leading-snug text-white">{post.title}</h2>
        <span className="mt-1 block text-sm text-white/50">{post.date}</span>
      </div>
    </a>
  )
}

/** Asymmetric 3-column hero grid of featured-post cards (2 + 1 tall + 2). */
export function Hero() {
  const [left, middle, right] = heroColumns

  return (
    <section aria-label="Featured posts" className="bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            {left.map((post) => (
              <HeroCard key={post.seed} post={post} />
            ))}
          </div>
          <div className="flex md:h-full">
            {middle.map((post) => (
              <HeroCard key={post.seed} post={post} tall />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {right.map((post) => (
              <HeroCard key={post.seed} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
