export interface ImageSplitProps {
  seed1?: string
  seed2?: string
  className?: string
}

export function ImageSplit({
  seed1 = 'huddle-split-1',
  seed2 = 'huddle-split-2',
  className,
}: ImageSplitProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${className ?? ''}`}>
      <div
        className="h-64 bg-cover bg-center md:h-80"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${seed1}/600/400)` }}
      />
      <div
        className="h-64 bg-cover bg-center md:h-80"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${seed2}/600/400)` }}
      />
    </div>
  )
}
