import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ProfileDropdown } from './ProfileDropdown'

export interface ProfileButtonProps {
  className?: string
}

export function ProfileButton({ className }: ProfileButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [close])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [close])

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          'flex items-center gap-3 rounded-full border border-gray-200 bg-white',
          'px-4 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.08)]',
          'transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        )}
        data-testid="profile-button"
      >
        <img
          src="https://picsum.photos/seed/menubox-avatar/40/40.jpg"
          alt="User avatar"
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-dark">Alex Morgan</p>
          <p className="text-xs text-muted">Senior Developer</p>
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen && <ProfileDropdown onClose={close} />}
    </div>
  )
}
