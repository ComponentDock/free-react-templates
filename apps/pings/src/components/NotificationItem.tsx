import { cn } from '@free-react-templates/ui'

interface NotificationItemProps {
  name: string
  description: string
  avatarUrl: string
  unread: boolean
}

export function NotificationItem({ name, description, avatarUrl, unread }: NotificationItemProps) {
  return (
    <li className={cn('block text-sm', unread && 'bg-[#fffaef]')}>
      <a
        href="#"
        className="flex items-center px-5 py-4 text-[#bfbfbf] transition-colors hover:bg-[#f9f9f9]"
      >
        <div className="mr-3 shrink-0">
          <img src={avatarUrl} alt={`${name} avatar`} className="h-10 w-10 rounded-full" />
        </div>
        <div className="text-left">
          <strong className="font-bold text-black">{name}</strong> {description}
        </div>
      </a>
    </li>
  )
}
