interface SubItem {
  id: string
  label: string
  href: string
}

export interface AccordionItem {
  id: string
  title: string
  icon: string // lucide icon name
  subItems: SubItem[]
}

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'profile',
    title: 'Profile',
    icon: 'User',
    subItems: [
      { id: 'sub-profile', label: 'Profile', href: '#profile' },
      { id: 'sub-messages', label: 'Messages', href: '#messages' },
      { id: 'sub-settings', label: 'Settings', href: '#settings' },
      { id: 'sub-sales', label: 'Sales', href: '#sales' },
      { id: 'sub-marketing', label: 'Marketing', href: '#marketing' },
    ],
  },
  {
    id: 'messages',
    title: 'Messages',
    icon: 'MessageSquare',
    subItems: [
      { id: 'msg-profile', label: 'Profile', href: '#profile' },
      { id: 'msg-messages', label: 'Messages', href: '#messages' },
      { id: 'msg-settings', label: 'Settings', href: '#settings' },
      { id: 'msg-sales', label: 'Sales', href: '#sales' },
      { id: 'msg-marketing', label: 'Marketing', href: '#marketing' },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'Settings',
    subItems: [
      { id: 'set-profile', label: 'Profile', href: '#profile' },
      { id: 'set-messages', label: 'Messages', href: '#messages' },
      { id: 'set-settings', label: 'Settings', href: '#settings' },
      { id: 'set-sales', label: 'Sales', href: '#sales' },
      { id: 'set-marketing', label: 'Marketing', href: '#marketing' },
    ],
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: 'LogOut',
    subItems: [
      { id: 'out-profile', label: 'Profile', href: '#profile' },
      { id: 'out-messages', label: 'Messages', href: '#messages' },
      { id: 'out-settings', label: 'Settings', href: '#settings' },
      { id: 'out-sales', label: 'Sales', href: '#sales' },
      { id: 'out-marketing', label: 'Marketing', href: '#marketing' },
    ],
  },
]
