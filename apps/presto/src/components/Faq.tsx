interface Question {
  id: string
  question: string
  answer: string
}

const QUESTIONS: Question[] = [
  {
    id: 'connect',
    question: 'Why can visitors not reach the server on my own machine?',
    answer:
      'A home router usually blocks incoming traffic and your address changes. Put the site on a hosting plan and point the domain there instead.',
  },
  {
    id: 'domain',
    question: 'Which domain name should I register for a new site?',
    answer:
      'Pick the shortest name that still reads as your brand, prefer the .com when it is free, and keep hyphens and numbers out where you can.',
  },
  {
    id: 'www',
    question: 'Can my site work without the www. prefix?',
    answer:
      'Yes. Add both host records at your registrar and set one address as the canonical host, then the other redirects to it permanently.',
  },
  {
    id: 'password',
    question: 'Why is my server asking for a password?',
    answer:
      'That prompt comes from a protected folder or panel. Sign in with the credentials from your dashboard, or reset them there if they no longer work.',
  },
]

/**
 * The dark FAQ band: a centred white title over four question-and-answer items in
 * two columns, each led by a white "Q." glyph.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-gradient-to-b from-violet-deep to-violet pt-24 pb-[70px] md:pb-[140px]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto mb-[90px] max-w-[700px] text-center">
          <h2 className="font-heading text-[31px] font-semibold text-white md:text-[35px]">
            Questions we hear most
          </h2>
          <p className="mt-4 text-base text-white/60">
            Still stuck after reading these? The support team answers within minutes, day or night.
          </p>
        </div>

        <ul className="grid gap-x-10 lg:grid-cols-2">
          {QUESTIONS.map(({ id, question, answer }) => (
            <li key={id} className="mb-[50px] flex">
              <span aria-hidden="true" className="font-heading text-xl text-white">
                Q.
              </span>
              <div className="pl-7">
                <h2 className="font-heading text-xl font-normal text-white">{question}</h2>
                <p className="mt-2 text-[15px] leading-[1.8] text-white/60">{answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
