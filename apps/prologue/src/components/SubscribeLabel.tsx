import { cn } from '@free-react-templates/ui'

export interface SubscribeLabelProps {
  /** The field this tab names. */
  htmlFor: string
  /** The tab's caption. */
  caption?: string
  className?: string
}

/**
 * The bar's left end: a transparent 172×80 tab whose only decoration is a 5px
 * black rule down its left side, naming the field inside it. On the narrowest
 * screens the tab shrinks to that bare rule and its caption is kept for screen
 * readers only.
 */
export function SubscribeLabel({
  htmlFor,
  caption = 'Subscribe Now:',
  className,
}: SubscribeLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      data-testid="subscribe-label"
      className={cn(
        'absolute top-0 left-0 flex h-[80px] w-[172px] items-center justify-center',
        'rounded-none border-l-[5px] border-l-ink bg-transparent',
        'max-[576px]:w-[5px]',
        className,
      )}
    >
      <span
        data-testid="subscribe-label-caption"
        className="font-sans text-[15px] leading-[1.2] font-medium text-ink max-[576px]:sr-only"
      >
        {caption}
      </span>
    </label>
  )
}
