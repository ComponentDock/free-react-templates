import { Calendar } from './components/Calendar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-16"
      style={{ backgroundColor: 'var(--color-page)' }}
    >
      <Calendar />
      <Footer />
    </div>
  )
}
