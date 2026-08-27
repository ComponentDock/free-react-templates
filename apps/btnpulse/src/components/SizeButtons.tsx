import { cn } from '@free-react-templates/ui'

interface SizeButtonsProps {
  className?: string
}

export function SizeButtons({ className }: SizeButtonsProps) {
  const sizes = [
    { label: 'Small', size: 'sm' as const },
    { label: 'Medium', size: 'md' as const },
    { label: 'Large', size: 'lg' as const },
  ]

  return (
    <div className={cn('mb-12 flex gap-4', className)}>
      {sizes.map(({ label, size }) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <small className="text-xs text-gray-500">{label}</small>
          <button
            className={cn(
              'rounded bg-[#007bff] px-[25px] py-2 text-[12px] font-normal uppercase tracking-[0.03rem] text-white shadow-[0_2px_5px_-1px_rgba(0,0,0,0.2)] transition-all duration-200',
              'hover:shadow-[0_2px_5px_-1px_rgba(0,0,0,0.2)]',
              size === 'sm' && 'px-[15px] py-[5px] text-[11px]',
              size === 'lg' && 'px-[30px] py-[15px] text-[16px]',
            )}
          >
            Button
          </button>
        </div>
      ))}
    </div>
  )
}
