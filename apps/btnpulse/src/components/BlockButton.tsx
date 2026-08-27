import { cn } from '@free-react-templates/ui'

interface BlockButtonProps {
  className?: string
}

export function BlockButton({ className }: BlockButtonProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <small className="text-xs text-gray-500">Full width button</small>
      <button
        className={cn(
          'w-full rounded bg-[#007bff] px-[25px] py-2 text-[12px] font-normal uppercase tracking-[0.03rem] text-white shadow-[0_2px_5px_-1px_rgba(0,0,0,0.2)] transition-all duration-200',
        )}
      >
        Button
      </button>
    </div>
  )
}
