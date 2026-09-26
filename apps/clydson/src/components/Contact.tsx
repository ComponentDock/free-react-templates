import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Phone, label: 'Phone', value: '+ 1235 2355 98' },
  { icon: Mail, label: 'Email', value: 'info@yoursite.com' },
  { icon: Globe, label: 'Website', value: 'yoursite.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-sm uppercase tracking-widest font-medium">
            Contact us
          </span>
          <h2 className="text-3xl font-bold text-heading mt-2 mb-4">Have a Project?</h2>
          <p className="text-body max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <form className="bg-light-bg p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-primary mb-4"
              />
              <textarea
                rows={7}
                placeholder="Message"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-primary mb-4 resize-none"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-3 rounded"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="lg:w-1/3 space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-heading font-medium">{c.label}</div>
                  <div className="text-body text-sm">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
