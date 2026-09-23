import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Business Owner',
    quote:
      'Outstanding legal representation. The team handled our corporate merger with professionalism and secured favorable terms. Highly recommended.',
    avatar: 'https://picsum.photos/seed/jurist-test1/80/80',
  },
  {
    name: 'James Porter',
    role: 'Real Estate Developer',
    quote:
      'Their expertise in real estate law saved us from a costly dispute. They were responsive, thorough, and achieved exactly what we needed.',
    avatar: 'https://picsum.photos/seed/jurist-test2/80/80',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Law assistance for my business',
    answer:
      'We provide comprehensive legal support for businesses including contract drafting, regulatory compliance, employment law, and dispute resolution. Our team works closely with your organization to understand your specific needs.',
  },
  {
    question: 'The latest updates in legislation',
    answer:
      'We stay current with all legislative changes and proactively advise our clients on how new laws may impact their operations. Subscribe to our newsletter for regular legal updates.',
  },
  {
    question: 'Are you an international law firm?',
    answer:
      'Yes, we serve clients across multiple jurisdictions. Our international network of legal partners allows us to handle cross-border matters effectively.',
  },
  {
    question: 'How does the legal process work?',
    answer:
      'After an initial free consultation, we assess your case, develop a strategy, and keep you informed at every stage. We handle all paperwork, filings, and court appearances on your behalf.',
  },
]

export function TestimonialsFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        {/* Testimonials */}
        <div>
          <h2 className="mb-8 text-3xl font-bold uppercase">
            Happy <span className="text-brand">Clients Says</span>
          </h2>
          <div className="space-y-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="mb-2 text-sm text-gray-500">{t.role}</p>
                  <blockquote className="border-l-2 border-brand pl-4 text-sm text-gray-600 italic">
                    {t.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-8 text-3xl font-bold uppercase">
            Frequently <span className="text-brand">Ask Questions</span>
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.question} className="rounded border border-gray-200 p-4">
                <button
                  className="flex w-full items-center justify-between text-left text-sm font-bold"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.question}
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400" />
                  )}
                </button>
                {openFaq === i && <p className="mt-3 text-sm text-gray-600">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
