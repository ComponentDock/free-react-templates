import { Calendar } from './components/Calendar'
import { Footer } from './components/Footer'
import { SAMPLE_EVENTS } from './data/events'

export function App() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-[#efefef] py-28">
      <Calendar events={SAMPLE_EVENTS} />
      <Footer />
    </section>
  )
}
