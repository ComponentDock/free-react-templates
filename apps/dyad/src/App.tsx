import { useState, useMemo, useCallback } from 'react'
import { Calendar } from './components/Calendar'
import { Footer } from './components/Footer'

function formatDate(date: Date): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const day = date.getDate()
  const padded = day < 10 ? `0${day}` : `${day}`
  return `${months[date.getMonth()]} ${padded}, ${date.getFullYear()}`
}

export function App() {
  const today = useMemo(() => new Date(), [])
  const [fromDate, setFromDate] = useState<Date>(today)
  const [toDate, setToDate] = useState<Date>(today)

  const handleFromSelect = useCallback((date: Date) => {
    setFromDate(date)
  }, [])

  const handleToSelect = useCallback((date: Date) => {
    setToDate(date)
  }, [])

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] py-28">
      <div className="w-full max-w-3xl px-4 text-center">
        <h2 className="mb-12 text-[20px] font-medium text-[#212529]">Select Your Dates</h2>

        {/* Range result inputs */}
        <div className="mb-8 flex justify-center gap-2">
          <input
            type="text"
            disabled
            readOnly
            placeholder="Check in"
            value={formatDate(fromDate)}
            className="w-40 rounded border border-[#ced4da] bg-[#e9ecef] px-3 py-1.5 text-sm text-[#495057] opacity-100"
          />
          <input
            type="text"
            disabled
            readOnly
            placeholder="Check out"
            value={formatDate(toDate)}
            className="w-40 rounded border border-[#ced4da] bg-[#e9ecef] px-3 py-1.5 text-sm text-[#495057] opacity-100"
          />
        </div>

        {/* Two calendar cards */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <Calendar selectedDate={fromDate} onSelect={handleFromSelect} disabledAfter={toDate} />
          <Calendar selectedDate={toDate} onSelect={handleToSelect} disabledBefore={fromDate} />
        </div>
      </div>
      <Footer />
    </section>
  )
}
