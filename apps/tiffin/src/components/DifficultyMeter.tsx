import { cn } from '@free-react-templates/ui'
import type { Level } from '../data/recipes'

interface DifficultyMeterProps {
  level: Level
  label: string
}

/**
 * Three outlined dots with the first `level` filled, followed by the word.
 * The dots are decorative — the word is the value — but the word alone never
 * says how long the scale is, so a visually hidden "Level 2 of 3" carries the
 * ordinal for assistive tech.
 */
export function DifficultyMeter({ level, label }: DifficultyMeterProps) {
  return (
    <>
      <span aria-hidden="true" className="inline-flex gap-[3px]">
        {Array.from({ length: 3 }, (_, index) => (
          <i
            key={index}
            className={cn(
              'block h-[7px] w-[7px] rounded-full border-[1.5px] border-accent',
              index < level && 'bg-accent',
            )}
          />
        ))}
      </span>
      <span className="sr-only">Level {level} of 3 · </span>
      <span>{label}</span>
    </>
  )
}
