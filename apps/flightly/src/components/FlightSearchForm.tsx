import { useState, type FormEvent } from 'react'
import { Search, Plane, Minus, Plus, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

interface PassengerControlsProps {
  label: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

function PassengerControls({ label, count, onIncrement, onDecrement }: PassengerControlsProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          aria-label={`Decrease ${label}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <span className="w-6 text-center text-sm font-semibold text-gray-800">{count}</span>
        <button
          type="button"
          onClick={onIncrement}
          aria-label={`Increase ${label}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export function FlightSearchForm() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [depart, setDepart] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const passengerText =
    adults === 1 && children === 0
      ? '1 Adult, 0 Children'
      : adults === 1 && children === 1
        ? '1 Adult, 1 Child'
        : `${adults} Adults, ${children} Children`

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Flight search"
      className="w-full max-w-4xl rounded-[10px] bg-white p-6 shadow-2xl sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* From */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="from" className="text-sm font-medium text-[#808080]">
            From
          </label>
          <input
            id="from"
            type="text"
            placeholder="City, Region or Airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-[10px] border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-[#ff4b5a] focus:ring-2 focus:ring-[#ff4b5a]/20"
          />
        </div>

        {/* To */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="to" className="text-sm font-medium text-[#808080]">
            To
          </label>
          <input
            id="to"
            type="text"
            placeholder="City, Region or Airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-[10px] border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-[#ff4b5a] focus:ring-2 focus:ring-[#ff4b5a]/20"
          />
        </div>

        {/* Depart */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="depart" className="text-sm font-medium text-[#808080]">
            Depart
          </label>
          <input
            id="depart"
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="w-full rounded-[10px] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-[#ff4b5a] focus:ring-2 focus:ring-[#ff4b5a]/20"
          />
        </div>

        {/* Return */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="return" className="text-sm font-medium text-[#808080]">
            Return
          </label>
          <input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full rounded-[10px] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-[#ff4b5a] focus:ring-2 focus:ring-[#ff4b5a]/20"
          />
        </div>

        {/* Passengers */}
        <div className="relative flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#808080]">Passengers</label>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Passengers"
            className="flex w-full items-center justify-between rounded-[10px] border border-gray-200 px-4 py-3 text-left text-sm text-gray-700 outline-none transition-colors hover:border-gray-300 focus:border-[#ff4b5a] focus:ring-2 focus:ring-[#ff4b5a]/20"
          >
            <Plane className="mr-2 h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
            <span className="flex-1 truncate">{passengerText}</span>
            <ChevronDown
              className={cn(
                'h-4 w-4 shrink-0 text-gray-400 transition-transform',
                isOpen && 'rotate-180',
              )}
              aria-hidden="true"
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 z-20 mt-1 w-full rounded-[10px] border border-gray-200 bg-white p-4 shadow-lg">
              <PassengerControls
                label="Adults"
                count={adults}
                onIncrement={() => setAdults((a) => Math.min(a + 1, 9))}
                onDecrement={() => setAdults((a) => Math.max(a - 1, 1))}
              />
              <PassengerControls
                label="Children"
                count={children}
                onIncrement={() => setChildren((c) => Math.min(c + 1, 9))}
                onDecrement={() => setChildren((c) => Math.max(c - 1, 0))}
              />
            </div>
          )}
        </div>
      </div>

      {/* Search button */}
      <div className="mt-6 flex justify-center sm:justify-end">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#ff4b5a] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#eb3746] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b5a] sm:w-auto"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
      </div>
    </form>
  )
}
