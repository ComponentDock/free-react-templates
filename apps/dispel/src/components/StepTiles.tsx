import { User, Mail, Star, CreditCard } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const TILES = [
  { icon: User, label: 'Personal' },
  { icon: Mail, label: 'Contact' },
  { icon: Star, label: 'Official' },
  { icon: CreditCard, label: 'Payment' },
] as const

interface StepTilesProps {
  currentStep: number
  visitedSteps: ReadonlySet<number>
  onTileClick: (step: number) => void
}

export function StepTiles({ currentStep, visitedSteps, onTileClick }: StepTilesProps) {
  return (
    <div className="mb-[23px] flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:mb-5">
      {TILES.map((tile, i) => {
        const isCurrent = i === currentStep
        const isVisited = visitedSteps.has(i)
        const isClickable = isVisited || i <= currentStep

        return (
          <button
            key={tile.label}
            type="button"
            onClick={() => isClickable && onTileClick(i)}
            disabled={!isClickable}
            aria-selected={isCurrent}
            aria-disabled={!isClickable}
            role="tab"
            className={cn(
              'flex h-[90px] w-[90px] flex-col items-center justify-center rounded-[5px] text-white transition-colors max-sm:w-[150px]',
              isCurrent ? 'bg-brand' : 'bg-muted',
              isClickable && !isCurrent && 'hover:opacity-80 cursor-pointer',
              !isClickable && 'cursor-not-allowed opacity-60',
            )}
          >
            <tile.icon size={29} strokeWidth={1.5} />
            <span className="mt-[-5px] text-[13px]">{tile.label}</span>
          </button>
        )
      })}
    </div>
  )
}
