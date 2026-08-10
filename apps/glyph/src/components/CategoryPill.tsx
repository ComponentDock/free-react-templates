import { cn } from '@free-react-templates/ui'

interface CategoryPillProps {
  label: string
  variant?: 'hero' | 'grid'
  className?: string
}

/** Category tag — the original styles it black on the hero card and light in
 *  the blog grid (`.cat_btn` vs `.blog_style1 .cat_btn` in style.css). */
export function CategoryPill({ label, variant = 'hero', className }: CategoryPillProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs uppercase leading-[30px] tracking-wide',
        variant === 'hero'
          ? 'rounded-[15px] bg-black px-5 text-white'
          : 'rounded-[5px] border border-line bg-soft px-4 text-ink',
        className,
      )}
    >
      {label}
    </span>
  )
}
