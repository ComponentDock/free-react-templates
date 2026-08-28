import { cn } from '@free-react-templates/ui'
import { BoltButton } from './BoltButton'

interface SizeButtonsProps {
  className?: string
}

const SIZE_PRIMARY = { bg: '#007bff', hoverBg: '#006adb', text: '#fff' }

export function SizeButtons({ className }: SizeButtonsProps) {
  const sizes = [
    { label: 'Large', size: 'lg' as const },
    { label: 'Medium', size: 'md' as const },
    { label: 'Small', size: 'sm' as const },
  ]

  return (
    <div className={cn('mb-12 flex gap-4', className)}>
      {sizes.map(({ label, size }) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <small className="text-xs font-normal text-btnbolt-label">{label}</small>
          <BoltButton
            label="Button"
            bg={SIZE_PRIMARY.bg}
            hoverBg={SIZE_PRIMARY.hoverBg}
            text={SIZE_PRIMARY.text}
            size={size}
          />
        </div>
      ))}
    </div>
  )
}
