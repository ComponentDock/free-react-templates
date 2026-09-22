import { cn } from '@free-react-templates/ui'
import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact Us
          </h2>
          <span className="mb-8 block h-px w-12 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="mb-1 text-sm font-medium text-ink">Address</h3>
              <p className="text-sm text-mist">
                123 Hotel Street, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="mb-1 text-sm font-medium text-ink">Phone</h3>
              <p className="text-sm text-mist">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="mb-1 text-sm font-medium text-ink">Email</h3>
              <p className="text-sm text-mist">info@hotelbreeze.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
