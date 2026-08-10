import { cn } from '@free-react-templates/ui'
import { imgUrl, posts, type ZinePost } from '../data'

function Zigzag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
      className={cn('h-3 w-24 text-brand', className)}
    >
      <path d="M1 10 L9 2 L17 10 L25 2 L33 10 L41 2 L49 10 L57 2 L65 10 L73 2 L81 10 L89 2 L95 10" />
    </svg>
  )
}

function CategoryTag({ label }: { label: string }) {
  return <p className="text-[11px] font-medium uppercase tracking-[5px] text-gray-400">{label}</p>
}

function PostRow({ post }: { post: ZinePost }) {
  if (post.variant === 'text') {
    return (
      <article className="relative bg-white px-6 py-14 md:px-16">
        <Zigzag className="absolute bottom-6 left-6" />
        <CategoryTag label={post.category} />
        <h3 className="mt-6 max-w-[870px] font-serif text-2xl leading-[30px] text-[#121212]">
          {post.title}
        </h3>
      </article>
    )
  }

  const imageLeft = post.variant === 'image-left'

  return (
    <article
      className={cn('flex flex-col bg-white md:flex-row', imageLeft ? '' : 'md:flex-row-reverse')}
    >
      <div className="md:w-2/3">
        <img
          src={imgUrl(post.seed!, 770, 500)}
          alt={post.title}
          className="h-64 w-full object-cover md:h-full"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:w-1/3 md:p-10">
        <CategoryTag label={post.category} />
        <h3 className="mt-5 font-display text-xl leading-8 text-[#121212] md:text-2xl">
          {post.title}
        </h3>
      </div>
    </article>
  )
}

export function BlogList() {
  return (
    <section aria-label="Blog posts" className="mx-auto max-w-[1170px]">
      <div className="space-y-12">
        {posts.map((post) => (
          <PostRow key={post.title} post={post} />
        ))}
      </div>
    </section>
  )
}
