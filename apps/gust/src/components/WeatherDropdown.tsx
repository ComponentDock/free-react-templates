import { useState, useRef, useEffect } from 'react'
import { Sun, CloudRain, Cloud, CloudLightning } from 'lucide-react'

const weatherItems = [
  { label: 'Sunny', icon: Sun, color: 'bg-sunny', textColor: 'text-gray-800' },
  { label: 'Rainy', icon: CloudRain, color: 'bg-rainy', textColor: 'text-white' },
  { label: 'Cloudy', icon: Cloud, color: 'bg-cloudy', textColor: 'text-white' },
  { label: 'Thunderstorm', icon: CloudLightning, color: 'bg-thunder', textColor: 'text-white' },
] as const

export function WeatherDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Weather Forecast
      </h1>

      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className="flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-medium text-white shadow-lg transition-colors hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2"
        >
          <Sun className="h-5 w-5" />
          <span>Today&apos;s Weather</span>
        </button>

        {isOpen && (
          <ul
            role="menu"
            className="absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            <div className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
            {weatherItems.map((item) => (
              <li key={item.label} role="menuitem">
                <button
                  onClick={() => setIsOpen(false)}
                  className={`flex w-full items-center gap-3 px-5 py-3.5 text-left text-sm font-medium transition-colors hover:bg-gray-50 ${item.textColor}`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
