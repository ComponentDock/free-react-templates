import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { PageHeading } from './components/PageHeading'
import { TintTable } from './components/TintTable'

export function App() {
  useEffect(() => {
    document.title = 'Rowtint — Solid Tint Row Table Template'
  }, [])

  return (
    <div className="min-h-screen bg-page font-poppins text-base font-normal leading-[1.8] text-muted">
      <main>
        <section className="py-[7em]">
          <div className="mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
            <PageHeading title="Table #10" />
            <TintTable />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
