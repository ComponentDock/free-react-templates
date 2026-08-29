import { CalendarWidget } from './components/CalendarWidget'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center font-sans text-[28px] font-normal text-ink">
          Calendar #07
        </h1>
        <CalendarWidget />
      </main>
      <Footer />
    </div>
  )
}
