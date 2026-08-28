import { cn } from '@free-react-templates/ui'

interface BevelButtonProps {
  label: string
  bg: string
  hoverBg: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  className?: string
}

/**
 * Square Bootstrap-style button with white sweep-overlay hover effect.
 * The overlay spans from left to right via scaleX; the label flips to black.
 */
export function BevelButton({
  label,
  bg,
  hoverBg,
  text = '#fff',
  size = 'md',
  block = false,
  className,
}: BevelButtonProps) {
  const sizeClasses = {
    sm: 'px-[15px] py-[5px] text-[10px]',
    md: 'px-[25px] py-2 text-[12px]',
    lg: 'px-[30px] py-[15px] text-[16px]',
  }

  return (
    <button
      className={cn(
        'group relative border font-bold uppercase tracking-[0.05rem] transition-all duration-300',
        sizeClasses[size],
        block && 'block w-full',
        className,
      )}
      style={{
        backgroundColor: bg,
        color: text,
        borderColor: bg,
      }}
      data-hover-bg={hoverBg}
    >
      {/* White sweep overlay — scaleX 0→1 from left on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[1px] origin-left scale-x-0 bg-white transition-transform duration-300 ease-linear group-hover:scale-x-100"
      />
      {/* Label — always on top, flips black under the sweep */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {label}
      </span>
    </button>
  )
}
