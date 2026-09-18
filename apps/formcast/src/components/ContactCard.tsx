import { cn } from '@free-react-templates/ui'
import { Mail } from 'lucide-react'
import { ContactForm } from './ContactForm'

export function ContactCard() {
  return (
    <div
      className={cn(
        'w-full max-w-lg rounded-lg bg-card p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]',
        'sm:p-10',
      )}
      data-testid="contact-card"
    >
      {/* Envelope icon */}
      <div className="mb-4 flex justify-center" data-testid="envelope-icon">
        <Mail className="h-10 w-10 text-ink" strokeWidth={1.5} />
      </div>

      <h1 className="mb-8 text-center text-2xl font-semibold text-ink">Drop Us A Message</h1>

      <ContactForm />
    </div>
  )
}
