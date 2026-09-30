import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { ScheduleTable } from './components/ScheduleTable'

export function App() {
  useEffect(() => {
    document.title = 'Gridmark — Class Schedule Table Template'
  }, [])

  return (
    <div className="min-h-screen bg-page font-poppins text-base font-normal leading-[1.8] text-body-ink">
      <main>
        <section className="py-[7em]">
          <div className="mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
            <div className="flex justify-center">
              <div className="mb-12 w-full text-center min-[768px]:w-1/2">
                <h2 className="text-[28px] font-normal leading-[1.5] text-heading">Table #04</h2>
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-6 text-center text-2xl font-normal text-heading">
                Class Schedule Table
              </h4>
              <ScheduleTable />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
