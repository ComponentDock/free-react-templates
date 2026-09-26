interface SkillBarProps {
  label: string
  percentage: number
}

export function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between text-sm font-medium text-ink">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200">
        <div
          className="h-2 bg-brand"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
