import { useState } from 'react'
import { Hotel, Plane, Car } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Tab {
  id: string
  label: string
  icons: React.ReactNode
}

const tabs: Tab[] = [
  { id: 'hotel', label: 'HOTEL ONLY', icons: <Hotel className="h-5 w-5" /> },
  {
    id: 'hotel-flight',
    label: 'HOTEL + FLIGHT',
    icons: (
      <>
        <Hotel className="h-5 w-5" />
        <Plane className="h-5 w-5" />
      </>
    ),
  },
  {
    id: 'hotel-flight-car',
    label: 'HOTEL + FLIGHT + CAR',
    icons: (
      <>
        <Hotel className="h-5 w-5" />
        <Plane className="h-5 w-5" />
        <Car className="h-5 w-5" />
      </>
    ),
  },
  {
    id: 'hotel-car',
    label: 'HOTEL + CAR',
    icons: (
      <>
        <Hotel className="h-5 w-5" />
        <Car className="h-5 w-5" />
      </>
    ),
  },
]

export interface SearchTabsProps {
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

export function SearchTabs({ activeTab: controlledTab, onTabChange }: SearchTabsProps) {
  const [internalTab, setInternalTab] = useState('hotel')
  const activeTab = controlledTab ?? internalTab

  function handleTabChange(tabId: string) {
    setInternalTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className="mb-0 flex flex-wrap gap-2" role="tablist" aria-label="Search type">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'flex items-center gap-2 rounded-t-lg px-4 py-3 text-xs font-semibold tracking-wide transition-colors',
              isActive ? 'bg-brand text-white' : 'bg-white text-gray-700 hover:bg-gray-100',
            )}
          >
            {tab.icons}
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
