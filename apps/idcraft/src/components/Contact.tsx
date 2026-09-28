import { MapPin, Phone, Mail } from 'lucide-react'

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address', value: '1481 Creekside Lane\nAvila Beach, CA 93424' },
  { icon: Phone, label: 'Phone', value: '+53 345 7953 32453' },
  { icon: Mail, label: 'Email', value: 'yourmail@gmail.com' },
]

export function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-10">
                <div className="w-1.5 h-8 bg-amber-brand mb-4" />
                <h2 className="text-3xl md:text-4xl font-semibold text-dark-heading">
                  Get in touch
                </h2>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand resize-none"
                />
                <button
                  type="submit"
                  className="bg-amber-brand text-white text-sm font-semibold px-8 py-3 hover:bg-dark-heading transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map placeholder */}
            <div className="bg-light-bg flex items-center justify-center min-h-[400px]">
              <p className="text-gray-text text-sm">Map area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info bar */}
      <div className="bg-light-bg py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.label} className="flex items-start gap-4">
                  <Icon size={24} className="text-amber-brand mt-1" />
                  <div>
                    <h6 className="text-sm font-semibold text-dark-heading">{info.label}:</h6>
                    <p className="text-xs text-gray-text whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
