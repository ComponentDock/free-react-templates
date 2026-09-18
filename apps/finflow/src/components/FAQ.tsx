import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Finflow offer?',
    answer:
      'Finflow offers a comprehensive range of financial services including personal banking, business consulting, credit cards, insurance, and investment management.',
  },
  {
    question: 'How do I open an account?',
    answer:
      'You can open an account online through our website or visit any of our branch locations. The process is simple and takes just a few minutes.',
  },
  {
    question: 'What are the fees associated with your accounts?',
    answer:
      'We offer transparent fee structures. Basic accounts have no monthly fees, while premium plans include additional features at competitive rates.',
  },
  {
    question: 'Is my money safe with Finflow?',
    answer:
      'Absolutely. We use bank-level encryption and security measures to protect your funds and personal information at all times.',
  },
  {
    question: 'Can I manage my account online?',
    answer:
      'Yes, our online banking platform and mobile app give you full access to your accounts, transactions, and financial tools 24/7.',
  },
  {
    question: 'What investment options do you provide?',
    answer:
      'We offer a range of investment options from conservative savings accounts to growth-focused portfolios, all managed by our expert advisors.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'Our customer support team is available 24/7 via phone, email, or live chat. You can also visit any of our branches for in-person assistance.',
  },
  {
    question: 'Do you offer business banking solutions?',
    answer:
      'Yes, we provide tailored business banking solutions including business accounts, merchant services, payroll management, and business loans.',
  },
] as const

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        type="button"
        onClick={() => setOpen((c) => !c)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink dark:text-white"
        aria-expanded={open}
      >
        {question}
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
        )}
      </button>
      {open && (
        <p className="pb-4 text-sm leading-relaxed text-mist dark:text-gray-400">{answer}</p>
      )}
    </div>
  )
}

export function FAQ() {
  const midpoint = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, midpoint)
  const right = faqs.slice(midpoint)

  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-14 grid gap-12 sm:grid-cols-2">
          <div>
            {left.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
          <div>
            {right.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
