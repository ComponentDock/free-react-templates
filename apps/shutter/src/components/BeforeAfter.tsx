import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

interface BeforeAfterProps {
  seed: string
  caption: string
}

export function BeforeAfter({ seed, caption }: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePointerDown = () => {
    setDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const rect = event.currentTarget.getBoundingClientRect()
    const next = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100))
    setPos(next)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      setPos((current) => Math.max(0, current - 5))
    } else if (event.key === 'ArrowRight') {
      setPos((current) => Math.min(100, current + 5))
    }
  }

  const afterSrc = `https://picsum.photos/seed/${seed}-after/800/600`
  const beforeSrc = `https://picsum.photos/seed/${seed}-before/800/600`

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        data-before-after
        data-testid="before-after-container"
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 select-none dark:border-gray-800"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(false)}
        onPointerLeave={() => setDragging(false)}
      >
        <img
          src={afterSrc}
          alt={`${caption} — after`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={beforeSrc}
          alt={`${caption} — before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            filter: 'grayscale(1) brightness(0.8)',
          }}
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white">
          After
        </span>
        <div
          role="slider"
          aria-label={`${caption} comparison`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-white shadow"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-900 shadow-lg">
            <ChevronsLeftRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
      <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
        {caption}
      </p>
    </div>
  )
}
