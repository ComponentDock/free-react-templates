import { cn } from '@free-react-templates/ui'
import type { Avatar } from '../data'
import { CheckIcon, WarningIcon } from './icons'

interface NotificationAvatarProps {
  avatar: Avatar
}

/**
 * 42 px square, 14 / 700 white initials on a circle, or a 20 px white glyph on a
 * 12 px-radius square. The ground comes from the card's own colour, which is why
 * it is an inline style and not a token class.
 */
export function NotificationAvatar({ avatar }: NotificationAvatarProps) {
  const shell =
    'grid h-[42px] w-[42px] flex-none place-items-center text-[14px] font-bold text-white'

  if (avatar.kind === 'initials') {
    return (
      <span
        aria-hidden="true"
        style={{ backgroundColor: avatar.color }}
        className={cn(shell, 'rounded-full')}
      >
        {avatar.text}
      </span>
    )
  }

  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: avatar.color }}
      className={cn(shell, 'rounded-[12px]')}
    >
      {avatar.icon === 'check' ? (
        <CheckIcon className="h-5 w-5" />
      ) : (
        <WarningIcon className="h-5 w-5" />
      )}
    </span>
  )
}
