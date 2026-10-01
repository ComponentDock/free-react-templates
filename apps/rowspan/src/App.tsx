import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { PeopleTable } from './components/PeopleTable'

export function App() {
  useEffect(() => {
    document.title = 'Rowspan — Dark Data-Table Template'
  }, [])

  return (
    <div className="min-h-screen bg-page font-poppins text-base font-normal leading-[1.8] text-muted">
      <main>
        <section className="py-[7em]">
          <div className="mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
            <div className="flex justify-center">
              <div className="mb-12 w-full text-center min-[768px]:w-1/2">
                <h2 className="text-[28px] font-normal leading-[1.5] text-heading">Table #07</h2>
              </div>
            </div>
            <PeopleTable />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
