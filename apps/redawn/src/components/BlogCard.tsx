import { Eye, Download, Heart } from 'lucide-react'
import { useState } from 'react'

export interface BlogCardProps {
  title: string
  category: string
  imageUrl: string
  hoverImageUrl: string
  previewCount: number
  downloadCount: number
  likeCount: number
  span?: 'full' | 'half'
}

export function BlogCard({
  title,
  category,
  imageUrl,
  hoverImageUrl,
  previewCount,
  downloadCount,
  likeCount: initialLikeCount,
  span = 'half',
}: BlogCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialLikeCount)

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      setLikeCount((c) => c + 1)
    }
  }

  return (
    <article
      className={`relative mb-[15px] overflow-hidden ${
        span === 'full' ? 'w-full' : 'w-full md:w-[calc(50%-8px)]'
      }`}
    >
      <a href="#single" className="group relative block overflow-hidden">
        <img src={imageUrl} alt="" className="block w-full" loading="lazy" />
        <img
          src={hoverImageUrl}
          alt=""
          className="absolute inset-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute right-3 top-3 flex gap-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1">
            <Eye size={14} /> {previewCount}
          </span>
          <span className="flex items-center gap-1">
            <Download size={14} /> {downloadCount}
          </span>
        </div>
      </a>

      <div className="relative bg-white p-6">
        <div className="mb-2 text-[13px] text-muted">
          <a href="#category" className="hover:text-brand">
            {category}
          </a>
        </div>
        <h2 className="text-lg font-bold leading-snug text-ink">
          <a href="#single" className="transition-colors hover:text-brand">
            {title}
          </a>
        </h2>
        <div className="absolute bottom-6 right-6 flex items-center gap-1">
          <button
            onClick={handleLike}
            aria-label={liked ? 'Liked' : 'Like'}
            className="transition-colors hover:text-brand"
          >
            <Heart size={20} className={liked ? 'fill-brand text-brand' : 'text-muted'} />
          </button>
          <span className="text-sm text-muted">{likeCount}</span>
        </div>
      </div>
    </article>
  )
}
