import { useState, useRef, useEffect, useCallback } from 'react'
import { Bell } from 'lucide-react'
import { NotificationItem } from './NotificationItem'

const NOTIFICATIONS = [
  {
    name: 'Claudia Gideon',
    description: 'marked the task done a day ago',
    avatarUrl: 'https://picsum.photos/seed/notif1/40/40',
    unread: true,
  },
  {
    name: 'Alex Stafford',
    description: 'marked the task done a day ago',
    avatarUrl: 'https://picsum.photos/seed/notif2/40/40',
    unread: true,
  },
  {
    name: 'Devin Richards',
    description: 'mentioned you in her comment on Invoices 2 days ago',
    avatarUrl: 'https://picsum.photos/seed/notif3/40/40',
    unread: false,
  },
  {
    name: 'Alex Stafford',
    description: 'marked the task done a day ago',
    avatarUrl: 'https://picsum.photos/seed/notif4/40/40',
    unread: false,
  },
  {
    name: 'Devin Richards',
    description: 'mentioned you in her comment on Invoices 2 days ago',
    avatarUrl: 'https://picsum.photos/seed/notif5/40/40',
    unread: false,
  },
]

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        onClick={toggle}
        aria-label="Notifications"
        aria-expanded={isOpen}
        className="relative cursor-pointer text-[#888] transition-colors hover:text-black"
      >
        <Bell size={30} />
        <span className="absolute -right-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#007bff] text-xs font-bold text-white">
          5
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-2.5 w-[380px] rounded border border-transparent bg-white p-2.5 opacity-100 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300">
          <div className="flex items-center py-2.5">
            <h3 className="mb-0 text-xs font-bold uppercase">Notifications</h3>
            <a href="#" className="ml-auto text-xs text-[#888] transition-colors hover:text-black">
              Mark all as read
            </a>
          </div>

          <ul className="mb-0 max-h-[200px] list-none overflow-y-auto border-b border-[#efefef] p-0">
            {NOTIFICATIONS.map((notif, i) => (
              <NotificationItem
                key={`${notif.name}-${i}`}
                name={notif.name}
                description={notif.description}
                avatarUrl={notif.avatarUrl}
                unread={notif.unread}
              />
            ))}
          </ul>

          <p className="m-0 p-0 text-center">
            <a href="#" className="text-xs text-[#888] transition-colors hover:text-black">
              View All
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
