import { useState } from 'react'
import { ChevronDown, User, MessageSquare, Settings, LogOut } from 'lucide-react'
import type { AccordionItem } from '../data'
import { cn } from '@free-react-templates/ui'

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  MessageSquare,
  Settings,
  LogOut,
}

export function Accordion({ items, defaultOpenId = 'profile' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id
        const IconComponent = iconMap[item.icon] || User

        return (
          <div
            key={item.id}
            className={cn(
              'overflow-hidden rounded-md bg-white shadow-sm transition-all border',
              isOpen ? 'border-[#3b71ca]' : 'border-gray-200',
            )}
          >
            <button
              id={`${item.id}-toggle`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
              className={cn(
                'flex w-full items-center justify-between px-6 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b71ca]/50',
                isOpen ? 'bg-[#f8f9fa] text-[#3b71ca]' : 'bg-white text-gray-800 hover:bg-gray-50',
              )}
            >
              <div className="flex items-center gap-3">
                <IconComponent
                  className={cn('h-5 w-5', isOpen ? 'text-[#3b71ca]' : 'text-gray-500')}
                />
                <span className="font-medium">{item.title}</span>
              </div>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  isOpen ? 'rotate-180 text-[#3b71ca]' : 'text-gray-400',
                )}
              />
            </button>

            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="border-t border-gray-100 bg-white px-6 py-4"
              >
                <ul className="flex flex-col gap-2">
                  {item.subItems.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                        className="block rounded px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#3b71ca]"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
