import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'How to list my item?',
    answer:
      'Simply create an account, click "Add Listing," fill in the details, upload photos, and submit for review. Your listing goes live within 24 hours.',
  },
  {
    question: 'Is this available in my country?',
    answer:
      'We operate in over 50 countries worldwide. Enter your location in the search bar to see what is available near you.',
  },
  {
    question: 'Is it free?',
    answer:
      'Basic listings are completely free. We also offer premium plans with enhanced visibility, featured placement, and analytics tools.',
  },
  {
    question: 'How does the system work?',
    answer:
      'Our platform connects you with local businesses and services. Search by category or location, read reviews, and find the best options nearby.',
  },
]

export function WhyUs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="items-center gap-12 md:flex">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img
              src="https://picsum.photos/seed/locate-whyus/600/400"
              alt="Why choose us"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-light text-primary-500">Why Us</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded border border-gray-200 p-3">
                  <button
                    className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    aria-expanded={openIdx === i}
                  >
                    {faq.question}
                    {openIdx === i ? (
                      <ChevronUp size={20} className="shrink-0 text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="shrink-0 text-gray-400" />
                    )}
                  </button>
                  {openIdx === i && <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
