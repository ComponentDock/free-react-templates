import { useState, type FormEvent } from 'react'

export function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-[#f8f9fa] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#b8b8b8] text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl font-heading uppercase text-black mt-2">Contact Us</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-14 px-4 border border-[#e9ecef] bg-white text-black focus:border-[#ff8b00] outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-14 px-4 border border-[#e9ecef] bg-white text-black focus:border-[#ff8b00] outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 px-4 border border-[#e9ecef] bg-white text-black focus:border-[#ff8b00] outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write your message."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={10}
                  className="w-full px-4 py-3 border border-[#e9ecef] bg-white text-black focus:border-[#ff8b00] outline-none transition-colors resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#ff8b00] text-white py-3 px-8 font-medium hover:bg-[#e07b00] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-5/12 lg:ml-auto">
            <h2 className="text-2xl font-heading uppercase text-black mb-4">
              Need to know more on details. Get In Touch
            </h2>
            <p className="text-[#939393] mb-6">
              Our team is ready to answer your questions and help you find the right mining solution
              for your project.
            </p>
            <a
              href="#"
              className="inline-block bg-[#ff8b00] text-white py-3 px-6 font-medium hover:bg-[#e07b00] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
