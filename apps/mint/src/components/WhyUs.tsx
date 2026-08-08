import { CheckCircle2 } from 'lucide-react'

const faqs = [
  {
    question: '1. What Should I Do If My Interior Broken?',
    answer:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    question: '2. What Is Your Location?',
    answer:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    question: '3. Robus Building',
    answer:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    question: '4. What Is Your Main Services?',
    answer:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
] as const

export function WhyUs() {
  return (
    <section id="why-us" className="bg-paper py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[3px] text-brand-dark">
          Why choose us
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-black uppercase text-ink dark:text-white">
          Why Us
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-gray-950"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 h-6 w-6 shrink-0 text-brand-dark"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-bold uppercase leading-snug text-ink dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
