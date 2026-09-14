import { cn } from '@free-react-templates/ui'
import { Lightbulb, MessageCircle, BarChart3, Compass, Target, Award } from 'lucide-react'

interface ProcessStepsProps {
  className?: string
}

const steps = [
  { icon: Lightbulb, label: 'Brainstorm' },
  { icon: MessageCircle, label: 'Discuss Ideas' },
  { icon: BarChart3, label: 'Projections' },
  { icon: Compass, label: 'Strategies' },
  { icon: Target, label: 'Seo Target' },
  { icon: Award, label: 'Awards' },
]

export function ProcessSteps({ className }: ProcessStepsProps) {
  return (
    <section
      aria-label="Process steps"
      className={cn('py-24', className)}
      style={{
        background: 'linear-gradient(90deg, #f6d0c5, #fbd2f6)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/30">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-white" />
              <div className="border-t border-white/40 pt-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                  {label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
