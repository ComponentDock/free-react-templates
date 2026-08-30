import { Calendar } from './components/Calendar'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="mb-8">
        <h1 className="text-center text-[28px] font-normal text-[--color-heading]">Calendar #03</h1>
      </div>
      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
        <Calendar label="Left calendar" />
        <Calendar label="Right calendar" />
      </div>
      <Footer />
    </div>
  )
}
