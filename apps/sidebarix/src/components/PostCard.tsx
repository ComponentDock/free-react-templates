import { cn } from '@free-react-templates/ui'

interface PostCardProps {
  title: string
  date: string
  image: string
  href?: string
  className?: string
}

export function PostCard({ title, date, image, href = '#', className }: PostCardProps) {
  return (
    <a
      href={href}
      className={cn('flex items-start gap-3 py-3 transition-colors hover:bg-gray-50', className)}
    >
      <img src={image} alt={title} className="h-[60px] w-[60px] shrink-0 object-cover" />
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-ink">{title}</h3>
        <p className="mt-0.5 text-xs text-muted">Posted: {date}</p>
      </div>
    </a>
  )
}
