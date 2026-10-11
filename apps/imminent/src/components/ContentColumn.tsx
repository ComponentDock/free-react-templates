import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { CopyLine } from './CopyLine'
import { Note } from './Note'
import { SubscribeForm } from './SubscribeForm'

export interface ContentColumnProps {
  className?: string
}

/**
 * The centred 700px column: one line of copy, the one-row subscribe form, the
 * spam note and the Component Dock credit, in that order.
 */
export function ContentColumn({ className }: ContentColumnProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[700px]', className)}>
      <CopyLine />
      <SubscribeForm />
      <Note />
      <Attribution />
    </div>
  )
}
