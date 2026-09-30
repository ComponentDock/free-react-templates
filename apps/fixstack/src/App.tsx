import { useEffect } from 'react'
import { FixedColumnTable } from './components/FixedColumnTable'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fixstack — Fixed Column Table Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-gradient-bottom to-gradient-top font-sans">
      <main className="mx-auto flex w-full max-w-[1366px] flex-1 items-center justify-center px-6 py-[33px] min-[768px]:px-[100px]">
        <FixedColumnTable />
      </main>
      <Footer />
    </div>
  )
}
