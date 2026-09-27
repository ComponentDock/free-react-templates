import { TrendingUp, Shield, Star } from 'lucide-react'

const plans = [
  {
    id: 'specific',
    name: 'Specific',
    description: 'Set a specific savings goal with a target amount and deadline.',
    Icon: TrendingUp,
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'A balanced approach to saving with moderate risk and steady growth.',
    Icon: Shield,
  },
  {
    id: 'special',
    name: 'Special',
    description: 'Premium investment plan with higher returns and personalized guidance.',
    Icon: Star,
  },
]

interface FinancialGoalsProps {
  selectedPlan: string
  onPlanSelect: (planId: string) => void
}

export function FinancialGoals({ selectedPlan, onPlanSelect }: FinancialGoalsProps) {
  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold text-[var(--color-heading)]">
        Set Financial Goals
      </h2>
      <p className="mb-6 text-[14px] font-semibold text-[var(--color-body)]">
        Choose a plan that aligns with your financial objectives.
      </p>

      <div className="flex flex-col gap-6">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id
          return (
            <label
              key={plan.id}
              className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-all ${
                isSelected
                  ? 'border-[var(--color-step-active)] bg-[var(--color-step-active)]/10 shadow-md'
                  : 'border-[var(--color-border)] hover:border-[var(--color-step-active)]/50'
              }`}
            >
              <input
                type="radio"
                name="plan"
                value={plan.id}
                checked={isSelected}
                onChange={() => onPlanSelect(plan.id)}
                className="sr-only"
              />
              <div
                className={`flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full transition-colors ${
                  isSelected
                    ? 'bg-[var(--color-step-active)] text-white'
                    : 'bg-[var(--color-plan-inactive)] text-white'
                }`}
              >
                <plan.Icon size={28} aria-hidden="true" />
              </div>
              <div>
                <p className="m-0 text-[18px] font-bold text-[var(--color-heading)]">{plan.name}</p>
                <p className="m-0 mt-1 text-[14px] font-semibold text-[var(--color-body)]">
                  {plan.description}
                </p>
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}
