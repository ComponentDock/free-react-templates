import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '512-421-3940' },
  { icon: Mail, label: 'Email', value: 'email@support.com' },
  { icon: MapPin, label: 'Address', value: '1739 Bubby Drive' },
]

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Get in touch</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Contact info */}
        <div className="mb-12 grid gap-8 sm:grid-cols-3">
          {contactInfo.map((info) => (
            <div key={info.label} className="text-center">
              <info.icon className="mx-auto mb-4 text-3xl text-primary" size={32} />
              <h3 className="mb-2 text-lg font-bold text-heading">{info.label}</h3>
              <p className="text-body">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form className="mx-auto max-w-2xl space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b-2 border-grey-border bg-grey-bg px-3 py-2.5 text-sm text-heading outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 border-grey-border bg-grey-bg px-3 py-2.5 text-sm text-heading outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 border-grey-border bg-grey-bg px-3 py-2.5 text-sm text-heading outline-none focus:border-primary"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full resize-none border-b-2 border-grey-border bg-grey-bg px-3 py-2.5 text-sm text-heading outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-[3px] border-2 border-primary bg-primary px-8 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
