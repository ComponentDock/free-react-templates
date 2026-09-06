import { useEffect } from 'react'
import { CoursesDropdown } from './components/CoursesDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropnest — Courses Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-dropnest-bg text-dropnest-text">
      <main className="flex flex-1 flex-col items-center px-4 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-dropnest-heading">
          Dropdown #19
        </h2>
        <CoursesDropdown />
      </main>
      <Footer />
    </div>
  )
}
