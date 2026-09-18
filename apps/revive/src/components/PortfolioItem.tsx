import { Eye, ArrowDownToLine } from 'lucide-react'
import { LikeHeart } from './LikeHeart'

interface PortfolioItemProps {
  title: string
  category: string
  imageSrc: string
  hoverImageSrc: string
  views: number
  downloads: number
  likes: number
  size: 'full' | 'half' | 'quarter'
}

export function PortfolioItem({
  title,
  category,
  imageSrc,
  hoverImageSrc,
  views,
  downloads,
  likes,
  size,
}: PortfolioItemProps) {
  const widthClass =
    size === 'full' ? 'w-full' : size === 'half' ? 'w-full sm:w-1/2' : 'w-full sm:w-1/2 lg:w-1/4'

  return (
    <article className={`${widthClass} box-border p-[15px]`}>
      <a href="#" className="group relative block overflow-hidden">
        <img src={imageSrc} alt={title} className="block w-full rounded-t-[2px]" loading="lazy" />
        <img
          src={hoverImageSrc}
          alt=""
          className="absolute inset-0 w-full rounded-t-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute right-[15px] top-[15px] z-10 flex items-center gap-2.5 rounded-[2px] bg-overlay px-2.5 py-2.5 text-sm leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1">
            <Eye size={14} /> {views}
          </span>
          <span className="flex items-center gap-1">
            <ArrowDownToLine size={14} /> {downloads}
          </span>
        </div>
      </a>
      <div className="relative min-h-[64px] rounded-b-[2px] bg-bg px-[25px] py-[25px]">
        <div className="mb-1">
          <span className="text-[13px] uppercase tracking-[3px] text-text-muted">{category}</span>
        </div>
        <h2 className="inline-block max-w-[70%] text-[20px] font-normal leading-[30px] text-text-dark">
          {title}
        </h2>
        <div className="absolute bottom-[25px] right-[15px]">
          <LikeHeart initialCount={likes} />
        </div>
      </div>
    </article>
  )
}
