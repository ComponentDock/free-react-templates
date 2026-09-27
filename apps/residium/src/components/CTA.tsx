import { Phone } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="bg-[#f0e9ff] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="font-heading text-4xl font-bold text-navy-800">
              Get a free
              <br />
              <span className="text-red-500">quotation Today!</span>
            </h2>
            <p className="mt-2 text-gray-500">Have any questions in mind?</p>
            <a
              href="#contact"
              className="mt-6 inline-block border-2 border-red-500 bg-red-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-red-500"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-sm text-gray-500">Say Hello,</span>
              <h3 className="font-heading text-2xl font-bold text-navy-800">+44 563 986 4785</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
