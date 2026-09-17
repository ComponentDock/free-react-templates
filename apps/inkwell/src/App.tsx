import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-[32px] font-bold leading-tight text-text-heading">
              Get in Touch
            </h2>
            <p className="mb-6 text-base leading-relaxed text-text-body">
              We&apos;d love to hear from you. Whether you have a question about our services,
              pricing, or just want to say hello — our team is ready to help.
            </p>
            <p className="text-sm text-text-body">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-xl bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
