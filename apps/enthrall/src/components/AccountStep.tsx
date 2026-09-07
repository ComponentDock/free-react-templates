import { PenTool, Code, AppWindow } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AccountStepProps {
  selectedJob: string
  onJobChange: (job: string) => void
}

const JOBS = [
  { value: 'designer', label: 'Designer', Icon: PenTool },
  { value: 'coder', label: 'Coder', Icon: Code },
  { value: 'developer', label: 'Developer', Icon: AppWindow },
] as const

export function AccountStep({ selectedJob, onJobChange }: AccountStepProps) {
  return (
    <div id="step-panel-1" role="tabpanel" aria-labelledby="tab-1" className="pt-[85px]">
      <p className="mb-10 text-center text-[18px] font-bold uppercase text-ink">
        What are you doing ?
      </p>
      <div className="flex items-center justify-around px-[140px] max-[768px]:px-[40px]">
        {JOBS.map(({ value, label, Icon }) => {
          const isSelected = selectedJob === value
          return (
            <label
              key={value}
              htmlFor={`job-${value}`}
              className={cn(
                'flex cursor-pointer flex-col items-center gap-2',
                'focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent',
              )}
            >
              <input
                type="radio"
                id={`job-${value}`}
                name="job"
                value={value}
                checked={isSelected}
                onChange={() => onJobChange(value)}
                className="sr-only"
              />
              <div
                className={cn(
                  'flex h-[100px] w-[100px] items-center justify-center rounded-full border-[2px] transition-colors',
                  isSelected ? 'border-accent' : 'border-ink',
                )}
              >
                <Icon
                  className={cn(
                    'h-12 w-12',
                    isSelected
                      ? 'text-accent'
                      : 'text-ink grayscale brightness-75 contrast-[4] opacity-70',
                  )}
                  aria-hidden="true"
                />
              </div>
              <span className={cn('text-sm font-bold', isSelected ? 'text-accent' : 'text-ink')}>
                {label}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
