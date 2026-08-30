import { useState } from 'react'
import { Footer } from './components/Footer'
import { DatePicker } from './components/DatePicker'

export function App() {
  const [value, setValue] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <main className="py-28">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto w-full lg:w-1/4">
            <h2 className="mb-12 text-center text-[20px] font-normal text-black">Pick a Date</h2>
            <DatePicker value={value} onChange={setValue} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
