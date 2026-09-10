import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I open a new account?',
    a: 'You can open a new account online by filling out our application form or visit any of our branch locations. The process takes just a few minutes.',
  },
  {
    q: 'What documents do I need?',
    a: 'You will need a valid government-issued ID, proof of address, and your social security number for identity verification.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No, we believe in complete transparency. All fees are clearly outlined in our pricing plans with no hidden charges.',
  },
  {
    q: 'How can I access my account?',
    a: 'You can access your account through our mobile app, website, ATM network, or by visiting any branch location.',
  },
  {
    q: 'What is the minimum balance requirement?',
    a: 'Our Basic plan has no minimum balance requirement. Premium and Professional plans require a minimum balance as outlined in their terms.',
  },
  {
    q: 'How do I transfer money?',
    a: 'You can transfer money via our mobile app, online banking portal, or by visiting a branch. Transfers between our accounts are instant.',
  },
  {
    q: 'Is my money insured?',
    a: 'Yes, all deposits are insured up to the maximum amount allowed by federal law through FDIC insurance.',
  },
  {
    q: 'How do I contact customer support?',
    a: 'You can reach us 24/7 via phone, email, live chat on our website, or through our mobile app support feature.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-ink transition hover:text-brand"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-4 text-sm text-gray-500">{a}</p>}
    </div>
  )
}

export function FAQ() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Find answers to the most common questions about our banking services.
          </p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-sm">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
