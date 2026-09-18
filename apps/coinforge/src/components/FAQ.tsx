import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const tabs = ['General Questions', 'ICO', 'Token', 'Cryptocurrency'] as const

const faqContent: Record<string, { question: string; answer: string }[]> = {
  'General Questions': [
    {
      question: 'Why should I invest in ICO?',
      answer:
        'ICOs provide early access to innovative blockchain projects at potentially lower valuations. Our platform vets every project to ensure legitimacy and long-term viability.',
    },
    {
      question: 'What are the risks of investing in ICO?',
      answer:
        'As with any investment, ICOs carry risk including market volatility, project failure, and regulatory changes. Diversify your portfolio and only invest what you can afford to lose.',
    },
  ],
  ICO: [
    {
      question: 'How do I participate in an ICO?',
      answer:
        'Create an account, complete KYC verification, and connect your wallet. You can then contribute ETH, BTC, or other accepted cryptocurrencies to participate.',
    },
    {
      question: 'What is the minimum investment?',
      answer:
        'Minimum contributions vary by project. Most ICOs on our platform accept contributions starting from 0.1 ETH equivalent.',
    },
  ],
  Token: [
    {
      question: 'When will tokens be distributed?',
      answer:
        'Token distribution typically occurs within 30 days after the ICO concludes. Exact dates are announced for each project.',
    },
    {
      question: 'Can I trade tokens immediately?',
      answer:
        'Tokens are listed on supported exchanges after the distribution event. Some projects may have a short vesting period.',
    },
  ],
  Cryptocurrency: [
    {
      question: 'How to trade cryptocurrencies?',
      answer:
        'Navigate to the trading section, select your trading pair, and place market or limit orders. Our platform supports spot trading with competitive fees.',
    },
    {
      question: 'Is my cryptocurrency safe?',
      answer:
        'We use cold storage for the majority of funds, multi-signature wallets, and regular security audits to protect your assets.',
    },
  ],
}

export function FAQ() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const items = faqContent[activeTab]!

  return (
    <section id="faq" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-coral">FAQ</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-coral text-white'
                  : 'bg-surface text-light hover:bg-surface/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.question} className="rounded-xl bg-surface/60 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">{item.question}</h3>
              <p className="text-sm text-light/70">{item.answer}</p>
              <a
                href="#faq"
                className="mt-4 inline-flex items-center gap-1 text-sm text-coral hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
