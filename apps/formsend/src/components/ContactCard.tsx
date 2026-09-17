import { EnvelopeIllustration } from './EnvelopeIllustration'
import { ContactForm } from './ContactForm'

export function ContactCard() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-bg-card shadow-2xl">
      <div className="grid min-h-[400px] md:grid-cols-2">
        {/* Left: decorative illustration */}
        <div className="hidden items-center justify-center bg-bg-card p-8 md:flex">
          <EnvelopeIllustration />
        </div>

        {/* Right: contact form */}
        <div className="flex items-center p-8 md:p-12">
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
