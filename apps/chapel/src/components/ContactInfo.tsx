import { contact } from '../data'

export function ContactInfo() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">{contact.heading}</h2>
            <h3 className="mt-6 text-xl font-bold text-ink">{contact.city}</h3>
            <p className="mt-2 text-body">{contact.address}</p>
            <p className="mt-2 text-body">
              <span className="font-semibold text-ink">{contact.emailLabel} </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {contact.email}
              </a>
            </p>
            <h4 className="mt-4 text-sm font-bold text-ink">{contact.phoneLabel}</h4>
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
              className="text-lg font-bold text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center justify-center rounded bg-section p-12 text-body">
            <p className="text-center text-sm">
              Map placeholder — integrate Google Maps or a static map here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
