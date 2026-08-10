import { cn } from '@free-react-templates/ui'

/* Section-title pill — dark navy bg, white 14px 600 uppercase text.
   padding 10px 25px (sidebar widgets use 12px 20px via className). */

export function SectionTitle({ children, className }: { children: string; className?: string }) {
  return (
    <h2
      className={cn(
        'inline-block bg-navy px-[25px] py-2.5 text-sm font-semibold uppercase text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}
