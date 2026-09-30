import { useEffect } from 'react'
import { EmployeeGrid } from './components/EmployeeGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Flexure — Responsive Employee Directory Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-poppins">
      <div className="flex flex-1 items-center justify-center px-[30px] py-[33px]">
        <main className="w-full max-w-[960px] overflow-hidden rounded-[10px]">
          <EmployeeGrid />
        </main>
      </div>
      <Footer />
    </div>
  )
}
