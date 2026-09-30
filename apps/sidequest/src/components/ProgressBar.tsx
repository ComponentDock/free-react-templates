export interface ProgressBarProps {
  percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-progress-track overflow-hidden">
        <div
          className="h-full rounded-full bg-brand transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-text-dark text-sm font-semibold shrink-0">{percentage}%</span>
    </div>
  )
}
