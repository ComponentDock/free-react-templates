import { Star, StarHalf } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Book } from '../data'

interface BookCardProps {
  book: Book
  /** caption2 variant: 1px #EEE1E0 border with no top border. */
  bordered?: boolean
}

/** White book card: cover, serif title, author, gold 4½-star rating,
    review count and the red price (source demo repeats the same content). */
export function BookCard({ book, bordered = false }: BookCardProps) {
  return (
    <article className={cn('bg-white', bordered && 'border border-edge border-t-0')}>
      <img src={book.cover} alt="" className="aspect-[2/3] w-full object-cover" />
      <div className="px-5 pb-0.5 pt-3.5">
        <h3 className="text-xl font-bold text-ink transition-colors hover:text-brand">
          <a
            href="#latest"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {book.title}
          </a>
        </h3>
        <p className="mt-0.5 text-sm text-muted">{book.author}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 4 }, (_, index) => (
                <Star key={index} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
              ))}
              <StarHalf className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-sm text-muted">{book.reviews}</span>
          </div>
          <span className="text-[22px] font-medium text-brand">{book.price}</span>
        </div>
      </div>
    </article>
  )
}
