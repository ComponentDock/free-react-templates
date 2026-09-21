import { Eye, MessageCircle } from 'lucide-react'
import type { AnimeShow } from '../data'

/* ShowCard recreated from the source template's product cards: thumbnail
   image with episode badge (top-left), comment badge (bottom-left),
   view badge (bottom-right), genre tag pills, and show title. */

interface ShowCardProps {
  show: AnimeShow
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <article className="group overflow-hidden rounded-[5px] bg-navy-card transition-colors hover:bg-navy-card-hover">
      {/* Thumbnail */}
      <div className="relative h-[325px] overflow-hidden">
        <img
          src={show.image}
          alt={show.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Episode badge — top-left */}
        <span className="absolute left-2 top-2 rounded bg-brand px-2 py-1 text-[11px] font-bold text-text-white">
          {show.episodes}
        </span>

        {/* Comment badge — bottom-left */}
        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-badge-dark px-2 py-1 text-[11px] text-text-white">
          <MessageCircle className="h-3 w-3" aria-hidden="true" />
          {show.comments}
        </span>

        {/* View badge — bottom-right */}
        <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-badge-dark px-2 py-1 text-[11px] text-text-white">
          <Eye className="h-3 w-3" aria-hidden="true" />
          {show.views.toLocaleString()}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Genre tags */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {show.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-navy-deep px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-light"
            >
              {genre}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-text-white group-hover:text-brand">
          {show.title}
        </h3>
      </div>
    </article>
  )
}
