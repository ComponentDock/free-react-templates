import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  className?: string
}

/**
 * The heavy headline: Poppins-Bold at 48px, uppercased by the stylesheet, one
 * centred line with 22px below it — kept short so it stays on a single line
 * inside the 790px column.
 */
export function Heading({ className }: HeadingProps) {
  return (
    <h3
      className={cn(
        'pb-[22px] text-center font-sans text-[48px] leading-[1.2] font-bold text-white uppercase',
        className,
      )}
    >
      We&apos;re almost there
    </h3>
  )
}
