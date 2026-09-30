import { Check } from 'lucide-react'

export interface StepItemProps {
  title: string
  description: string
  completed: boolean
}

export default function StepItem({ title, description, completed }: StepItemProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="mt-0.5 shrink-0">
        {completed ? (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-check-green">
            <Check size={14} className="text-white" />
          </span>
        ) : (
          <span className="inline-block w-5 h-5" />
        )}
      </div>
      <div className="min-w-0">
        <p className="text-text-dark text-sm font-semibold">{title}</p>
        <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
