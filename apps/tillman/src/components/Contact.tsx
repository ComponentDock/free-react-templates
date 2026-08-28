import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Phone, text: '(10) 892-293 2678' },
  { icon: Mail, text: 'contact@tillman.com' },
  { icon: MapPin, text: '768/A, Green lane 790, Max town New York' },
]

export function Contact() {
  return (
    <section className="bg-leaf-500 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Need any help?</h2>
            <p className="mb-8 text-gray-200">
              The information is also part of the MF Rural, where you can find news, quotes,
              technological information and others, in addition.
            </p>

            <div className="mb-8 space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.text}
                  className="flex items-center gap-3 text-gray-200 lg:justify-start"
                >
                  <info.icon className="h-5 w-5 flex-shrink-0" />
                  <p>{info.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-leaf-500"
            >
              Drop Your Message
            </a>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/tillman-contact/600/400"
              alt="Agricultural landscape"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
