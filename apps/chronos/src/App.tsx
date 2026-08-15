import { DateCard } from './components/DateCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-black">
      <main className="flex flex-1 flex-col items-center px-4 py-28">
        <h2 className="mb-12 text-center text-[28px] font-normal text-black">Today</h2>
        <DateCard />
      </main>
      <Footer />
    </div>
  )
}
