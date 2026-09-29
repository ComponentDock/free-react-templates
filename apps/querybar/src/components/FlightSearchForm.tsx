import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface RoomState {
  adults: number
  children: number
}

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function FlightSearchForm() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [depart, setDepart] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [rooms, setRooms] = useState<RoomState[]>([{ adults: 1, children: 0 }])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0)
  const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0)
  const roomCount = rooms.length

  const summaryText = `${totalAdults} Adult${totalAdults !== 1 ? 's' : ''}, ${totalChildren} Children, ${roomCount} Room${roomCount !== 1 ? 's' : ''}`

  const updateRoom = (index: number, field: 'adults' | 'children', delta: number) => {
    setRooms((prev) =>
      prev.map((room, i) => {
        if (i !== index) return room
        const newVal = room[field] + delta
        if (field === 'adults' && newVal < 1) return room
        if (newVal < 0) return room
        return { ...room, [field]: newVal }
      }),
    )
  }

  const addRoom = () => {
    setRooms((prev) => [...prev, { adults: 1, children: 0 }])
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[1000px] rounded-[10px] p-[59px_55px_71px] max-md:p-[40px_30px_55px]"
      style={{
        background: 'linear-gradient(to top, #c949fe 0%, #47a9ff 100%)',
      }}
    >
      {/* Row 1: From / To */}
      <div className="mb-4 flex gap-4 max-md:flex-col">
        <div className="flex-1">
          <label
            htmlFor="from"
            className="mb-2 block text-[18px] font-medium capitalize text-querybar-label"
          >
            From
          </label>
          <input
            id="from"
            type="text"
            placeholder="City, Region or Airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-[10px] bg-querybar-input-bg px-5 py-4 text-[18px] text-querybar-text outline-none placeholder:text-querybar-placeholder"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="to"
            className="mb-2 block text-[18px] font-medium capitalize text-querybar-label"
          >
            To
          </label>
          <input
            id="to"
            type="text"
            placeholder="City, Region or Airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-[10px] bg-querybar-input-bg px-5 py-4 text-[18px] text-querybar-text outline-none placeholder:text-querybar-placeholder"
          />
        </div>
      </div>

      {/* Row 2: Passengers / Depart / Return / Search */}
      <div className="flex gap-4 max-md:flex-col">
        {/* Passengers */}
        <div className="flex-[1.2]">
          <label className="mb-2 block text-[18px] font-medium capitalize text-querybar-label">
            Passengers
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={summaryText}
              className="w-full cursor-pointer rounded-[10px] bg-querybar-input-bg px-5 py-4 pr-12 text-[18px] text-querybar-text outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-label="Passengers"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-querybar-text"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-label="Toggle passengers dropdown"
            >
              <Plus className="h-5 w-5" />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white p-4 shadow-lg">
                {rooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="mb-3 border-b border-gray-100 pb-3 last:mb-0 last:border-0 last:pb-0"
                  >
                    <p className="mb-2 text-sm font-semibold text-gray-700">Room {idx + 1}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Adults</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateRoom(idx, 'adults', -1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label="Decrease adults"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-gray-800">
                          {room.adults}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateRoom(idx, 'adults', 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label="Increase adults"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-600">Children</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateRoom(idx, 'children', -1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label="Decrease children"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-gray-800">
                          {room.children}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateRoom(idx, 'children', 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label="Increase children"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addRoom}
                  className="mt-2 text-sm font-semibold text-querybar-green underline underline-offset-2 transition-colors hover:text-querybar-green-hover"
                >
                  Add room
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Depart */}
        <div className="flex-1">
          <label
            htmlFor="depart"
            className="mb-2 block text-[18px] font-medium capitalize text-querybar-label"
          >
            Depart
          </label>
          <input
            id="depart"
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="w-full rounded-[10px] bg-querybar-input-bg px-5 py-4 text-[18px] text-querybar-text outline-none"
          />
        </div>

        {/* Return */}
        <div className="flex-1">
          <label
            htmlFor="return"
            className="mb-2 block text-[18px] font-medium capitalize text-querybar-label"
          >
            Return
          </label>
          <input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full rounded-[10px] bg-querybar-input-bg px-5 py-4 text-[18px] text-querybar-text outline-none"
          />
        </div>

        {/* Search button */}
        <div className="flex items-end">
          <button
            type="submit"
            className={cn(
              'h-[60px] w-full min-w-[140px] cursor-pointer rounded-[10px] bg-querybar-green px-8 text-[18px] font-bold uppercase text-white transition-colors duration-200 hover:bg-querybar-green-hover',
              'max-md:mt-2',
            )}
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
