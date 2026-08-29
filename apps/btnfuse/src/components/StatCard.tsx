import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface StatCardProps {
  number: string
  label: string
  icon: ReactNode
  iconPosition: 'left' | 'right'
  variant: 'white' | 'purple' | 'teal' | 'pink' | 'green'
  iconColor: 'purple' | 'teal' | 'pink' | 'green'
}

export function StatCard({ number, label, icon, iconPosition, variant, iconColor }: StatCardProps) {
  const cardClass = cn(
    'stat-card',
    variant === 'white' && 'stat-card-white',
    variant === 'purple' && 'stat-card-purple',
    variant === 'teal' && 'stat-card-teal',
    variant === 'pink' && 'stat-card-pink',
    variant === 'green' && 'stat-card-green',
  )

  const iconClass = cn('stat-icon', `icon-${iconColor}`)

  const textContent = (
    <div className="stat-text">
      <h4>{number}</h4>
      <span>{label}</span>
    </div>
  )

  const iconContent = <div className={iconClass}>{icon}</div>

  return (
    <button type="button" className={cardClass}>
      {iconPosition === 'left' ? (
        <>
          {iconContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {iconContent}
        </>
      )}
    </button>
  )
}
