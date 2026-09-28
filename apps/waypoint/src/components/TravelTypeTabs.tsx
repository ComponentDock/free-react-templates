import { Building, Car, Building2, PlaneTakeoff } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TravelType {
  id: string
  label: string
  icons: React.ReactNode[]
}

const TRAVEL_TYPES: TravelType[] = [
  {
    id: 'hotel-only',
    label: 'HOTEL ONLY',
    icons: [<Building key="building" className="h-5 w-5" />],
  },
  {
    id: 'hotel-flight',
    label: 'HOTEL + FLIGHT',
    icons: [
      <Building key="building" className="h-5 w-5" />,
      <PlaneTakeoff key="plane" className="h-5 w-5" />,
    ],
  },
  {
    id: 'hotel-flight-car',
    label: 'HOTEL + FLIGHT + CAR',
    icons: [
      <Building key="building" className="h-5 w-5" />,
      <PlaneTakeoff key="plane" className="h-5 w-5" />,
      <Car key="car" className="h-5 w-5" />,
    ],
  },
  {
    id: 'hotel-car',
    label: 'HOTEL + CAR',
    icons: [<Building2 key="hotel" className="h-5 w-5" />, <Car key="car" className="h-5 w-5" />],
  },
]

interface TravelTypeTabsProps {
  activeType?: string
  onSelect?: (typeId: string) => void
}

export function TravelTypeTabs({ activeType = 'hotel-only', onSelect }: TravelTypeTabsProps) {
  return (
    <header className="mb-7">
      <div className="flex gap-[5px] overflow-x-auto max-md:overflow-x-scroll">
        {TRAVEL_TYPES.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect?.(type.id)}
            className={cn(
              'relative cursor-pointer rounded-[3px] px-5 py-[18px] text-center transition-colors duration-300',
              type.id === activeType
                ? 'bg-waypoint-navy text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-t-waypoint-navy after:opacity-100'
                : 'bg-white text-waypoint-muted hover:bg-waypoint-navy hover:text-white',
            )}
          >
            <div className="mb-2.5 flex w-full justify-center gap-1">
              {type.icons.map((icon, i) => (
                <span
                  key={i}
                  className={cn(
                    'text-current',
                    type.id === activeType ? 'text-white' : 'text-waypoint-muted',
                  )}
                >
                  {icon}
                </span>
              ))}
            </div>
            <span className="text-xs font-bold">{type.label}</span>
          </button>
        ))}
      </div>
    </header>
  )
}
