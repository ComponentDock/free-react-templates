import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'
import { Footer } from './components/Footer'
import type { BookingFormData } from './components/BookingForm'

function handleSearch(data: BookingFormData) {
  // eslint-disable-next-line no-console
  console.log('Search:', data)
}

export function App() {
  useEffect(() => {
    document.title = 'PropSearch — Property Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center bg-propsearch-bg px-4 py-[7em] font-sans">
      <main className="w-full max-w-[1140px]">
        <h1 className="mb-12 text-center font-sans text-[28px] font-normal leading-[1.5] text-black">
          PropSearch
        </h1>
        <BookingForm onSearch={handleSearch} />
      </main>
      <Footer />
    </div>
  )
}
