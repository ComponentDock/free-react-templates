import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-makely-border focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-makely-border focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-makely-border focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-makely-border focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-makely-border focus:outline-none focus:border-primary resize-none"
            />
            <Button
              type="submit"
              className="rounded-full px-8 py-3 bg-primary text-white hover:bg-primary-dark"
            >
              Send Message
            </Button>
          </form>

          {/* Address card */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-makely-border space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Address</h4>
                <p className="text-makely-body">
                  123 Creative Lane, Suite 100
                  <br />
                  San Francisco, CA 94102
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-makely-body">(123) 456 7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-makely-body">info@makely.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
