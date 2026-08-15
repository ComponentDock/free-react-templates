interface ProgressBarProps {
  percentage: number
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      aria-label="Fundraising progress"
      className="h-[5px] rounded-sm bg-track"
    >
      <div data-fill className="h-full rounded-sm bg-[#333]" style={{ width: `${percentage}%` }} />
    </div>
  )
}
