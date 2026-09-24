import { cn } from '@free-react-templates/ui'
import { categoryColorMap, categoryTextMap, type CategoryColor } from '../data'

interface CategoryBadgeProps {
  category: string
  color: CategoryColor
  className?: string
}

export function CategoryBadge({ category, color, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase leading-tight',
        categoryColorMap[color],
        categoryTextMap[color],
        className,
      )}
    >
      {category}
    </span>
  )
}
