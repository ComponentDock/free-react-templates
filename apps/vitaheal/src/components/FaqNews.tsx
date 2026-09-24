import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    q: 'What insurance plans do you accept?',
    a: 'We accept most major insurance plans including Blue Cross, Aetna, Cigna, and United Healthcare. Please contact our billing department for specific coverage questions.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can schedule an appointment by calling our front desk, using our online booking form, or visiting us in person. Walk-in patients are also welcome during clinic hours.',
  },
  {
    q: 'What are your visiting hours?',
    a: 'General visiting hours are from 8:00 AM to 8:00 PM daily. ICU and special care units may have restricted hours — please check with the nursing station.',
  },
] as const

const newsPosts = [
  {
    title: 'Advances in Preventive Cardiology',
    author: 'Dr. Sarah Mitchell',
    date: 'March 15, 2025',
    comments: 4,
    image: 'vitaheal-news-1',
  },
  {
    title: 'Understanding Modern Diagnostic Imaging',
    author: 'Dr. James Cooper',
    date: 'March 10, 2025',
    comments: 2,
    image: 'vitaheal-news-2',
  },
  {
    title: 'Why Regular Health Checkups Matter',
    author: 'Dr. Emily Chen',
    date: 'March 5, 2025',
    comments: 6,
    image: 'vitaheal-news-3',
  },
] as const

/** FAQ accordion on the left, Latest News posts on the right. */
export function FaqNews() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-band-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* FAQ */}
          <div className="lg:col-span-7">
            <h2 className="mb-2 text-2xl font-bold text-ink-900">Faq & Stuff</h2>
            <p className="mb-8 text-sm text-mute-600">read all about it</p>
            <div className="space-y-3">
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={item.q} className="rounded-sm bg-white shadow-sm">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-ink-700 transition-colors hover:text-teal-400"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-mute-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4">
                        <p className="text-sm leading-6 text-mute-600">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Latest News */}
          <div className="lg:col-span-5">
            <h2 className="mb-2 text-2xl font-bold text-ink-900">Latest News</h2>
            <p className="mb-8 text-sm text-mute-600">read all about it</p>
            <div className="space-y-5">
              {newsPosts.map((post) => (
                <div key={post.title} className="flex gap-4">
                  <img
                    src={`https://picsum.photos/seed/${post.image}/120/100`}
                    alt={post.title}
                    className="h-20 w-20 shrink-0 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <div>
                    <a
                      href="#news"
                      className="text-sm font-semibold text-ink-900 transition-colors hover:text-teal-400"
                    >
                      {post.title}
                    </a>
                    <div className="mt-1 flex items-center gap-3 text-xs text-mute-400">
                      <span>by {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <a
                      href="#news"
                      className="mt-1 inline-block text-xs text-teal-400 transition-colors hover:text-teal-600"
                    >
                      {post.comments} Comments
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
