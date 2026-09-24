export interface PostCardProps {
  image: string
  category: string
  date: string
  headline: string
  excerpt?: string
  commentCount?: number
  variant?: 'stacked' | 'horizontal' | 'large'
  showPlayButton?: boolean
}

export function PostCard({
  image,
  category,
  date,
  headline,
  excerpt,
  commentCount,
  variant = 'stacked',
  showPlayButton = false,
}: PostCardProps) {
  if (variant === 'horizontal') {
    return (
      <article className="flex gap-4 rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative w-28 min-w-[7rem] shrink-0 overflow-hidden sm:w-36">
          <img src={image} alt={headline} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center gap-1 py-3 pr-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {category}
          </span>
          <span className="text-xs text-meta">{date}</span>
          <h3 className="font-display text-sm font-semibold leading-snug text-ink sm:text-base">
            {headline}
          </h3>
        </div>
      </article>
    )
  }

  if (variant === 'large') {
    return (
      <article className="group relative overflow-hidden rounded-sm">
        <img
          src={image}
          alt={headline}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="bg-brand px-2 py-0.5 text-xs font-semibold uppercase text-white">
              {category}
            </span>
            <span className="text-xs text-white/70">{date}</span>
            {commentCount !== undefined && (
              <span className="text-xs text-white/70">· {commentCount} comments</span>
            )}
          </div>
          <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
            {headline}
          </h3>
          {excerpt && <p className="mt-2 text-sm leading-relaxed text-white/80">{excerpt}</p>}
        </div>
        {showPlayButton && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="Play video"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/90 text-white">
              <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </article>
    )
  }

  // Default: stacked variant (small cards for banner left column)
  return (
    <article className="group relative overflow-hidden rounded-sm">
      <img
        src={image}
        alt={headline}
        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="bg-brand px-2 py-0.5 text-xs font-semibold uppercase text-white">
            {category}
          </span>
        </div>
        <div className="mb-2 flex items-center gap-2 text-xs text-white/70">
          <span>{date}</span>
          {commentCount !== undefined && (
            <>
              <span>·</span>
              <span>{commentCount} comments</span>
            </>
          )}
        </div>
        <h3 className="font-display text-sm font-bold leading-snug text-white">{headline}</h3>
        {excerpt && (
          <p className="mt-1 text-xs leading-relaxed text-white/70 line-clamp-2">{excerpt}</p>
        )}
      </div>
    </article>
  )
}
