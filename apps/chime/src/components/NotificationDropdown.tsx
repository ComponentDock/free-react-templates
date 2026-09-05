import { useState, useEffect, useRef, useCallback } from 'react'
import { Bell, ArrowRight } from 'lucide-react'

interface Notification {
  id: number
  name: string
  action: string
  time: string
  avatarSeed: string
}

const notifications: Notification[] = [
  {
    id: 1,
    name: 'David Smith',
    action: 'commented on your album',
    time: '10 min ago',
    avatarSeed: 'chime-1',
  },
  {
    id: 2,
    name: 'John Doe',
    action: 'reacted to your video',
    time: '10 min ago',
    avatarSeed: 'chime-2',
  },
  {
    id: 3,
    name: 'Gary Clinton',
    action: 'commented on your picture',
    time: '10 min ago',
    avatarSeed: 'chime-3',
  },
]

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuId = 'notification-menu'

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, close])

  const handleItemInteraction = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault()
      close()
    },
    [close],
  )

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="flex items-center gap-2 bg-transparent text-[18px] text-white focus:outline-none"
      >
        <div className="relative flex h-10 w-10 items-center justify-center">
          <Bell size={26} color="white" />
          <span
            className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#28a745]"
            aria-hidden="true"
          />
        </div>
        <span>Notifications</span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-1/2 z-50 mt-[60px] w-[400px] -translate-x-1/2 bg-white shadow-[0_10px_34px_-20px_rgba(0,0,0,.41)]"
        >
          {/* Caret triangle */}
          <div
            className="absolute -top-[0.7em] left-1/2 -translate-x-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: '0.7em solid transparent',
              borderRight: '0.7em solid transparent',
              borderBottom: '0.8em solid white',
            }}
            aria-hidden="true"
          />

          {notifications.map((item, index) => (
            <a
              key={item.id}
              role="menuitem"
              href="#"
              onClick={handleItemInteraction}
              className={`flex items-start px-5 py-5 text-[16px] text-[rgba(0,0,0,.7)] hover:bg-transparent ${
                index < notifications.length - 1 ? 'border-b border-[rgba(0,0,0,.05)]' : ''
              }`}
              style={{ whiteSpace: 'normal' }}
            >
              <div className="relative h-[45px] w-[45px] flex-shrink-0">
                <img
                  src={`https://picsum.photos/seed/${item.avatarSeed}/90/90`}
                  alt={item.name}
                  className="h-[45px] w-[45px] rounded-full object-cover"
                />
                <span
                  className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#28a745]"
                  aria-hidden="true"
                />
              </div>
              <div className="pl-3" style={{ width: 'calc(100% - 45px)' }}>
                <h4 className="text-[18px] font-medium text-[rgba(0,0,0,.8)]">
                  {item.name}{' '}
                  <span className="font-normal text-[rgba(0,0,0,.3)]">{item.action}</span>
                </h4>
                <span className="text-[rgba(0,0,0,.3)]">{item.time}</span>
              </div>
            </a>
          ))}

          <a
            role="menuitem"
            href="#"
            onClick={handleItemInteraction}
            className="flex items-center justify-center gap-1 border-t border-[rgba(0,0,0,.05)] px-5 py-4 text-center text-[13px] font-medium uppercase text-[#726df3] hover:bg-transparent"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>
      )}
    </div>
  )
}
