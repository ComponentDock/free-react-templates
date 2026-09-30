import { useEffect } from 'react'
import { FixedHeaderTable } from './components/FixedHeaderTable'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Headlock — Fixed Header Table Template'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-sans">
      <main className="flex min-h-screen w-full flex-wrap items-center justify-center px-[30px] py-[33px]">
        <div className="mx-auto w-full max-w-[1366px]">
          <div className="w-full max-w-[1170px]">
            <FixedHeaderTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
