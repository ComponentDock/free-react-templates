import { ContactForm } from './components/ContactForm'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Roboto',sans-serif] text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-7/12">
            <h1 className="mb-10 font-['Poppins',sans-serif] text-5xl font-bold md:text-[3.5rem]">
              Fill the form. <br /> It&apos;s easy.
            </h1>
            <ContactForm />
          </div>
          <div className="lg:ml-auto lg:w-4/12">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
