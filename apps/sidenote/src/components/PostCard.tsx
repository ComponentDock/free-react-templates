import { cn } from '@free-react-templates/ui'

interface PostCardProps {
  title: string
  date: string
  seed: string
  className?: string
}

export function PostCard({ title, date, seed, className }: PostCardProps) {
  return (
    <article className={cn('flex gap-4', className)}>
      <img
        src={`https://picsum.photos/seed/${seed}/120/120`}
        alt={title}
        className="h-[100px] w-[100px] shrink-0 rounded object-cover"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold leading-snug text-ink">{title}</h3>
        <p className="mt-1 text-xs text-muted">Posted: {date}</p>
      </div>
    </article>
  )
}
