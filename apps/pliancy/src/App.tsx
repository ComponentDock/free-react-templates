import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { OrdersTable } from './components/OrdersTable'

export function App() {
  useEffect(() => {
    document.title = 'Pliancy — Responsive Orders Table Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center bg-[linear-gradient(45deg,#4158d0,#c850c0)] px-[30px] py-[33px] font-open-sans max-[576px]:px-[15px]">
      <main className="flex w-full max-w-[1170px] flex-1 items-center justify-center">
        <OrdersTable />
      </main>
      <Footer />
    </div>
  )
}
