import { cn } from '@free-react-templates/ui'

interface PostCardProps {
  title: string
  date: string
  seed: string
  className?: string
}

export function PostCard({ title, date, seed, className }: PostCardProps) {
  return (
    <article
      className={cn('flex items-start gap-4 rounded-lg bg-card-bg p-4 shadow-sm', className)}
      data-testid="post-card"
    >
      <div className="flex-1">
        <h3 className="text-sm font-semibold leading-snug text-heading-text">{title}</h3>
        <p className="mt-1 text-xs text-secondary-text">Posted: {date}</p>
      </div>
      <img
        src={`https://picsum.photos/seed/${seed}/120/120`}
        alt={title}
        className="h-16 w-16 flex-shrink-0 rounded object-cover"
      />
    </article>
  )
}
