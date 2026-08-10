import { cn } from '@free-react-templates/ui'
import { imgUrl, retroPosts, type Post } from '../data'
import { CategoryPill } from './CategoryPill'

interface RetroCardProps {
  post: Post
  tall?: boolean
  smallText?: boolean
  className?: string
}

function RetroCard({ post, tall = false, smallText = false, className }: RetroCardProps) {
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
        <div className="mb-3 ml-5 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <CategoryPill key={category.label} label={category.label} color={category.color} />
          ))}
        </div>
        <h2
          className={cn('font-bold leading-snug text-white', smallText ? 'text-base' : 'text-lg')}
        >
          {post.title}
        </h2>
        <span className="mt-1 block text-sm text-white/50">{post.date}</span>
      </div>
    </a>
  )
}

/** Light \"retro\" band: tall Travel card right, Nature + two-col row left. */
export function RetroSection() {
  const [travel, nature, sports, lifestyle] = retroPosts

  return (
    <section aria-label="Retro layout" className="bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:order-2 md:col-span-5">
            <RetroCard post={travel} tall />
          </div>
          <div className="md:order-1 md:col-span-7">
            <RetroCard post={nature} smallText className="mb-4" />
            <div className="grid gap-4 sm:grid-cols-2">
              <RetroCard post={sports} smallText />
              <RetroCard post={lifestyle} smallText />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
