import { cn } from '@free-react-templates/ui'
import { BoltButton } from './BoltButton'

interface BlockButtonProps {
  className?: string
}

export function BlockButton({ className }: BlockButtonProps) {
  return (
    <div className={cn('mb-3 mr-3', className)}>
      <div className="mb-2 text-center">
        <small className="text-xs font-normal text-btnbolt-label">Full width button</small>
      </div>
      <BoltButton label="Button" bg="#007bff" hoverBg="#006adb" text="#fff" block />
    </div>
  )
}
