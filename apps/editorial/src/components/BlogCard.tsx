export interface BlogPost {
  tag: string
  title: string
  description: string
  image: string
  size: 'large' | 'small' | 'wide' | 'tall'
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const heightClass =
    post.size === 'tall'
      ? 'h-80'
      : post.size === 'wide'
        ? 'h-48'
        : post.size === 'large'
          ? 'h-80'
          : 'h-48'

  return (
    <article className="group relative overflow-hidden rounded-sm">
      <div
        className={`w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${heightClass}`}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">
            {post.tag}
          </p>
          <h3 className="mb-2 text-xl font-bold text-white">{post.title}</h3>
          <p className="max-w-xs text-sm text-white/70">{post.description}</p>
        </div>
      </div>
    </article>
  )
}
