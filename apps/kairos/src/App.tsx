import { useState, useCallback } from 'react'
import { Calendar } from './components/Calendar'
import { ResultField } from './components/ResultField'
import { Footer } from './components/Footer'

export function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date)
  }, [])

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] py-28">
      <div className="w-full max-w-3xl px-4 text-center">
        <h2 className="mb-5 text-[20px] font-medium text-[#212529]">Inline Date Picker</h2>
        <ResultField selectedDate={selectedDate} />
        <Calendar onDateChange={handleDateChange} />
      </div>
      <Footer />
    </section>
  )
}
