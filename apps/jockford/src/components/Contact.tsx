import { Globe, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactInfo = [
  { icon: Globe, label: 'Email', value: 'info@domain.com' },
  { icon: MapPin, label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Phone, label: 'Phone', value: '+123 456 7890' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-text-primary">Contact</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">{info.label}</h3>
                  <p className="text-sm text-text-secondary">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 rounded-xl border border-border bg-bg-primary p-6 shadow-sm"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              aria-label="Your email"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="resize-none rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              aria-label="Your message"
            />
            <Button type="submit" className="bg-brand text-white hover:bg-brand-hover">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
