import { cn } from '@free-react-templates/ui'
import { BevelButton } from './BevelButton'

interface BlockButtonProps {
  className?: string
}

export function BlockButton({ className }: BlockButtonProps) {
  return (
    <div className={cn('mb-3 mr-3', className)}>
      <div className="mb-2 text-center">
        <small className="text-[12.8px] font-normal text-bevel-label">Full width button</small>
      </div>
      <BevelButton label="Button" bg="#007bff" hoverBg="#006adb" text="#fff" block />
    </div>
  )
}
