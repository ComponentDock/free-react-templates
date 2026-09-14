import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    q: 'How to Make an Account?',
    a: 'Simply click the Get Started button and follow the registration steps. You will need a valid email address and can set up your account in under two minutes.',
  },
  {
    q: 'How to manage your Dashboard?',
    a: 'Our intuitive dashboard lets you monitor usage, manage billing, and configure services all from one place. Real-time analytics keep you informed.',
  },
  {
    q: 'How to grow your investments funds?',
    a: 'We provide automated portfolio tools and market insights to help you diversify and grow your investments with confidence over time.',
  },
  {
    q: 'What are those requirements for businesses?',
    a: 'Business accounts require a valid business registration and tax ID. We support companies of all sizes, from startups to enterprise.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-panel py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left image */}
          <img
            src="https://picsum.photos/seed/cirrus-faq/600/700"
            alt="FAQ illustration"
            className="w-full rounded bg-gray-200 object-cover shadow-[17px_25px_56px_-22px_rgba(0,0,0,0.38)]"
            style={{ minHeight: 500 }}
          />

          {/* Right accordion */}
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-brand-pink">
              FAQs
            </span>
            <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                    className={cn(
                      'flex w-full items-center justify-between rounded-full px-6 py-4 text-left font-semibold text-white transition-colors',
                      openIndex === i ? 'bg-brand' : 'bg-brand/90',
                    )}
                  >
                    {faq.q}
                    <ChevronDown
                      size={20}
                      className={cn(
                        'shrink-0 transition-transform',
                        openIndex === i && 'rotate-180',
                      )}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 py-4 text-sm leading-relaxed text-muted">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
