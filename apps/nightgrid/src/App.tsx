import { useEffect } from 'react'
import { DataTable } from './components/DataTable'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nightgrid — Dark Data Table Template'
  }, [])

  return (
    <div className="min-h-screen bg-page font-sans font-light">
      <main className="mx-auto w-full max-w-[540px] px-[15px] py-28 min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
        <h2 className="mb-12 text-xl font-medium text-heading">Table #6</h2>
        <DataTable />
      </main>
      <Footer />
    </div>
  )
}
