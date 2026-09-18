import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    title: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: Phone,
    title: 'Contact Number',
    value: '+1 234 567 890',
  },
  {
    icon: Mail,
    title: 'Email Address',
    value: 'info@roost.com',
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'www.roost.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Contact Me</h2>
          <p className="text-gray-500">Get in touch with us</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ icon: Icon, title, value }) => (
            <div key={title} className="rounded-lg bg-light-100 p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
