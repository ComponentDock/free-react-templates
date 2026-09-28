import { useEffect } from 'react'
import { ApplicationForm } from './components/ApplicationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regline — Job Application Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#212121] px-4 py-12 font-[Poppins,sans-serif]">
      <main className="w-full max-w-[700px]">
        <h1 className="mb-2 text-[28px] font-bold leading-tight text-white">Apply for job</h1>
        {/* Blue decorative triangle */}
        <div className="mb-6 flex">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 14L0 0h20L10 14z" fill="#4A6CF7" />
          </svg>
        </div>
        <ApplicationForm />
        <Footer />
      </main>
    </div>
  )
}
