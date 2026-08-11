import { cn } from '@free-react-templates/ui'
import { imgUrl } from '../data'

interface PostChipProps {
  category: string
  className?: string
}

/* Category chip (reference `.post-cta a` / `.post-tag a`): 20px tall,
   uppercase 10px, 0.75px letter-spacing, white background + brand-blue text;
   inverts (blue bg, white text) when the parent card is hovered. */
export function PostChip({ category, className }: PostChipProps) {
  return (
    <span
      className={cn(
        'inline-block h-5 bg-paper px-2.5 text-[10px] font-medium tracking-[0.75px] text-brand uppercase transition-colors group-hover:bg-brand group-hover:text-white',
        className,
      )}
    >
      {category}
    </span>
  )
}

interface PostMetaProps {
  author: string
  date: string
  className?: string
}

/* Post meta line (reference `.post-meta`): 12px muted text with a 2px
   #f1f1f1 bottom border. */
export function PostMeta({ author, date, className }: PostMetaProps) {
  return (
    <p className={cn('border-b-2 border-divider pb-2 text-xs text-text-muted', className)}>
      {author} on {date}
    </p>
  )
}

interface PostThumbProps {
  seed: string
  alt: string
  width: number
  height: number
  className?: string
}

/* Seeded picsum placeholder image (never copies ColorLib assets). */
export function PostThumb({ seed, alt, width, height, className }: PostThumbProps) {
  return <img src={imgUrl(seed, width, height)} alt={alt} loading="lazy" className={className} />
}
