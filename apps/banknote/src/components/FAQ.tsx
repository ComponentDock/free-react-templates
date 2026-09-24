const faqs = [
  {
    q: 'How do I open a new account?',
    a: 'You can open an account online by filling out our application form or visiting any of our branch locations. The process takes about 10 minutes.',
  },
  {
    q: 'What are the fees for international transfers?',
    a: 'International transfer fees vary by destination and amount. Standard transfers start at $15. Check our fee schedule for details.',
  },
  {
    q: 'Is my money safe with Banknote?',
    a: 'Absolutely. We are FDIC insured and use bank-level encryption to protect your accounts and personal information.',
  },
  {
    q: 'How can I contact customer support?',
    a: 'Our support team is available 24/7 via phone, email, or live chat. You can also visit any branch for in-person assistance.',
  },
  {
    q: 'Do you offer business accounts?',
    a: 'Yes, we offer a range of business account options from basic checking to enterprise treasury management solutions.',
  },
  {
    q: 'What investment options do you provide?',
    a: 'We offer mutual funds, CDs, money market accounts, and personalized investment advisory services.',
  },
  {
    q: 'How do I reset my password?',
    a: 'Click "Forgot Password" on the login page and follow the instructions sent to your registered email address.',
  },
  {
    q: 'Can I set up automatic bill payments?',
    a: 'Yes, you can set up automatic payments for recurring bills through our online banking dashboard.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Ask Questions</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h4 className="mb-2 text-lg font-bold">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
