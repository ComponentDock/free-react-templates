import { cn } from '@free-react-templates/ui'

interface ProgressBarProps {
  value: number
  label?: string
  className?: string
  barClassName?: string
}

export function ProgressBar({ value, label, className, barClassName }: ProgressBarProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
        {label ? <span>{label}</span> : null}
        <span>{value}%</span>
      </div>
      <div
        className={cn(
          'h-4 w-full overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-700',
          barClassName,
        )}
      >
        <div
          data-testid="progress-fill"
          className="h-full bg-brand"
          style={{
            width: `${value}%`,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0 10px, transparent 10px 20px)',
          }}
        />
      </div>
    </div>
  )
}
