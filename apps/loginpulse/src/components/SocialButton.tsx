import { type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SocialButtonProps {
  label: string
  icon: ReactNode
  variant: 'facebook' | 'google'
}

export function SocialButton({ label, icon, variant }: SocialButtonProps) {
  return (
    <a
      href="#"
      className={cn(
        'group/btn relative flex h-[70px] w-[calc((100%-20px)/2)] items-center justify-center gap-2 overflow-hidden rounded-[10px] font-montserrat text-[18px] font-semibold shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] transition-all',
        variant === 'facebook'
          ? 'bg-[var(--color-facebook-blue)] text-white'
          : 'bg-white text-[var(--color-text-heading)]',
      )}
    >
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover/btn:opacity-100"
        style={{
          background: 'linear-gradient(45deg, var(--color-brand-cyan), var(--color-brand-magenta))',
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {label}
      </span>
    </a>
  )
}
