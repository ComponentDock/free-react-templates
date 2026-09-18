import { contact } from '../data'

export function ContactInfo() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Contact Us</h3>
            <p className="text-sm text-body">{contact.address}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Phone</h3>
            <p className="text-sm text-body">{contact.phone}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Email</h3>
            <p className="text-sm text-body">{contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
