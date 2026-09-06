import { useState, useRef, useEffect } from 'react'
import { LayoutGrid, Mail, Users, Settings, LogOut } from 'lucide-react'
import type { ReactNode } from 'react'

interface MenuItemProps {
  icon: ReactNode
  label: string
  badge?: string
  isLast?: boolean
}

export function MenuItem({ icon, label, badge, isLast }: MenuItemProps) {
  return (
    <a
      href="#"
      className={`relative flex items-center px-4 py-[15px] text-[14px] text-dropmenu-menu-text transition-colors duration-300 hover:bg-white hover:text-dropmenu-menu-hover ${
        isLast ? '' : 'border-b border-dropmenu-border'
      }`}
    >
      <span className="mr-4 inline-block">{icon}</span>
      <span>{label}</span>
      {badge && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-dropmenu-badge px-[6px] py-[2px] text-[11px] text-white">
          {badge}
        </span>
      )}
    </a>
  )
}

interface ProfileDropdownProps {
  name?: string
  location?: string
  imageSeed?: string
}

export function ProfileDropdown({
  name = 'Kevin Thomas',
  location = 'New York City, USA',
  imageSeed = 'dropmenu-profile',
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="flex w-full max-w-[500px] justify-center">
      <div ref={dropdownRef} className="relative inline-block w-full">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center text-left text-dropmenu-trigger transition-colors duration-300"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <div className="mr-3 flex-shrink-0">
            <img
              src={`https://picsum.photos/seed/${imageSeed}/50/50`}
              alt={name}
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
          </div>
          <div className="profile-info">
            <h3 className="m-0 p-0 text-[16px] font-normal">{name}</h3>
            <span className="block text-[13px] font-light text-dropmenu-text">{location}</span>
          </div>
        </button>

        {/* Dropdown menu — conditional render */}
        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mt-0 w-full border border-transparent bg-dropmenu-menu-bg shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]">
            <MenuItem icon={<LayoutGrid size={16} />} label="User Dashboard" />
            <MenuItem icon={<Mail size={16} />} label="Inbox" badge="3" />
            <MenuItem icon={<Users size={16} />} label="Following" />
            <MenuItem icon={<Settings size={16} />} label="Setting" badge="New" />
            <MenuItem icon={<LogOut size={16} />} label="Log out" isLast />
          </div>
        )}
      </div>
    </div>
  )
}
