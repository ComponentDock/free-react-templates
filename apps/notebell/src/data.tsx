export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** Avatar for one notification: initials on a circle, or a glyph on a rounded square. */
export type Avatar =
  | { kind: 'initials'; text: string; color: string }
  | { kind: 'icon'; icon: 'check' | 'warning'; color: string }

export interface Notification {
  id: string
  avatar: Avatar
  body: React.ReactNode
  quote?: string
  time: { dateTime: string; label: string }
  category: string
  read: boolean
}

/**
 * The four notifications, in the reference's order and with its copy. Three start
 * unread; the invoice card starts read, so the panel opens at a counter of 3.
 */
export const INITIAL: Notification[] = [
  {
    id: 'mara',
    avatar: { kind: 'initials', text: 'MK', color: '#6d28d9' },
    body: (
      <>
        <strong>Mara Kovač</strong> commented on <strong>Q4 launch plan</strong>
      </>
    ),
    quote: 'Can we move the press embargo to Tuesday? Wednesday clashes with the partner webinar.',
    time: { dateTime: '2026-09-25T13:58', label: '2 min ago' },
    category: 'Marketing',
    read: false,
  },
  {
    id: 'deploy',
    avatar: { kind: 'icon', icon: 'check', color: '#15803d' },
    body: (
      <>
        Deploy <strong>web-app #1482</strong> finished on <strong>production</strong>
      </>
    ),
    time: { dateTime: '2026-09-25T13:41', label: '19 min ago' },
    category: 'Build took 3 min 12 s',
    read: false,
  },
  {
    id: 'diego',
    avatar: { kind: 'initials', text: 'DA', color: '#b45309' },
    body: (
      <>
        <strong>Diego Alves</strong> invited you to <strong>Design Review</strong>
      </>
    ),
    time: { dateTime: '2026-09-25T11:02', label: '3 h ago' },
    category: 'Thu 1 Oct, 10:00–11:00',
    read: false,
  },
  {
    id: 'invoice',
    avatar: { kind: 'icon', icon: 'warning', color: '#be123c' },
    body: (
      <>
        Invoice <strong>INV-2093</strong> is 5 days overdue
      </>
    ),
    time: { dateTime: '2026-09-24T09:00', label: 'Yesterday' },
    category: 'Billing',
    read: true,
  },
]

/** The status line's vocabulary — every message is verbatim. */
export const MESSAGES = {
  read: 'Marked as read.',
  unread: 'Marked as unread.',
  archived: 'Notification archived.',
  restored: 'Notification restored.',
  allRead: 'All notifications marked as read.',
  empty: "You're all caught up.",
} as const
