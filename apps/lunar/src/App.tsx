import { Calendar } from './components/Calendar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] py-28">
      <div className="w-full max-w-3xl px-4 text-center">
        <h2 className="mb-12 text-[20px] font-medium text-[#212529]">Pick a Date</h2>
        <Calendar />
      </div>
      <Footer />
    </section>
  )
}
