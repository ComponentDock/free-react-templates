interface ProgressBarProps {
  step: number
  total: number
}

export function ProgressBar({ step, total }: ProgressBarProps) {
  const fillPercent = ((step + 1) / total) * 100

  return (
    <div className="absolute bottom-[-52px] left-1/2 w-[39.91%] -translate-x-1/2 max-md:bottom-[-40px] max-md:w-[calc(100%-40px)] max-md:translate-x-0 max-md:left-5">
      {/* Track */}
      <div className="relative h-[2px] w-full bg-track">
        {/* Fill */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-ink transition-all duration-300"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
      {/* Number markers */}
      <div className="relative mt-1 flex justify-between text-[13px] text-ink">
        <span>{step < total ? step + 1 : ''}</span>
        <span>{total}</span>
      </div>
    </div>
  )
}
