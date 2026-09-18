interface SlideCounterProps {
  current: number
  total: number
}

export function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div
      className="fixed bottom-0 right-0 z-[9998] bg-white px-6 py-4"
      aria-label={`Slide ${current} of ${total}`}
    >
      <span className="text-[30px] font-bold text-snap-primary">
        {String(current).padStart(2, '0')}
      </span>
      <span className="ml-1 text-sm text-snap-body">/ {total}</span>
    </div>
  )
}
