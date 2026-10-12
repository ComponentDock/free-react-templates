import { cn } from '@free-react-templates/ui'

export type DividerVariant = 'days' | 'hours' | 'minutes' | 'seconds'

export interface ColonDividerProps {
  /** Which group this separator introduces. */
  variant: DividerVariant
  /** Short uppercase caption painted under the group. */
  caption: string
  className?: string
}

/**
 * The oversized colon that sits between two countdown groups, with the group's
 * caption hanging beneath it in bold uppercase type. The leading (days)
 * divider collapses to zero width and paints no colon, so the first caption
 * hangs under the first pair; every divider collapses to 10px on the smallest
 * screens, where the minutes colon is already gone one breakpoint earlier.
 */
export function ColonDivider({ variant, caption, className }: ColonDividerProps) {
  const leading = variant === 'days'

  return (
    <div
      data-testid={`divider-${variant}`}
      className={cn(
        'relative h-[120px]',
        leading ? 'w-0 max-[1200px]:w-[10px]' : 'w-[68px]',
        variant === 'minutes' && 'max-[1200px]:w-[10px]',
        'max-[576px]:w-[10px]',
        className,
      )}
    >
      {!leading && (
        <span
          data-testid={`colon-${variant}`}
          aria-hidden="true"
          className={cn(
            'flex h-full items-center justify-center font-digit text-[120px] leading-none text-white',
            variant === 'minutes' && 'max-[1200px]:hidden',
            'max-[576px]:hidden',
          )}
        >
          :
        </span>
      )}
      <span
        data-testid="caption"
        className="absolute top-full left-full w-[193px] pt-[23px] text-center font-sans text-[14px] leading-none font-bold tracking-[3px] text-white uppercase"
      >
        {caption}
      </span>
    </div>
  )
}
