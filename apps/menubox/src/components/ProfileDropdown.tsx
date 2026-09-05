import { Settings, User, LayoutDashboard, LogOut } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { MenuItem } from './MenuItem'

export interface ProfileDropdownProps {
  onClose: () => void
}

const menuItems = [
  { icon: Settings, label: 'Settings' },
  { icon: User, label: 'Profile' },
  { icon: LayoutDashboard, label: 'Dashboard' },
]

export function ProfileDropdown({ onClose }: ProfileDropdownProps) {
  return (
    <div
      role="menu"
      className={cn(
        'absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2',
        'overflow-hidden rounded-xl border border-gray-100 bg-white',
        'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]',
        'animate-fade-in',
      )}
      data-testid="profile-dropdown"
    >
      {/* User info header */}
      <div className="border-b border-gray-100 px-4 py-3">
        <p className="text-sm font-semibold text-dark">Alex Morgan</p>
        <p className="text-xs text-muted">alex.morgan@email.com</p>
        <p className="mt-0.5 text-xs text-muted">Senior Developer</p>
      </div>

      {/* Menu items */}
      <div className="py-1">
        {menuItems.map((item) => (
          <MenuItem key={item.label} icon={item.icon} label={item.label} onClick={onClose} />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Logout */}
      <div className="py-1">
        <MenuItem icon={LogOut} label="Logout" onClick={onClose} />
      </div>
    </div>
  )
}
