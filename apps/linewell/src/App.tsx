import { BannerHeader } from './components/BannerHeader'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-dark px-4 py-12">
      <div className="w-full max-w-[600px] overflow-hidden rounded-lg bg-white shadow-xl">
        <BannerHeader />
        <div className="px-8 py-6">
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  )
}
