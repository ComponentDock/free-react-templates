const CARDS = [
  {
    title: 'Visit Our Office',
    lines: ['18 Kingsway Terrace', 'West Harbour, Bristol', 'BS1 4QA, United Kingdom'],
  },
  {
    title: 'Let\u2019s call us',
    lines: ['Phone 01: +44 20 7946 0958', 'Phone 02: +44 20 7946 0957', 'FAX: +44 20 7946 0956'],
  },
  {
    title: 'Let\u2019s Email Us',
    lines: ['hello@wanderport.example', 'bookings@wanderport.example', 'groups@wanderport.example'],
  },
  {
    title: 'Customer Support',
    lines: [
      'support@wanderport.example',
      'urgent@wanderport.example',
      'customers@wanderport.example',
    ],
  },
] as const

/* Four centered contact cards on white with the section's 120px rhythm. */
export function ContactInfo() {
  return (
    <section aria-label="Contact details" className="section-gap">
      <div className="mx-auto max-w-[1170px] px-4">
        <ul className="grid gap-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <li key={card.title} className="text-center">
              <h4 className="mb-[25px] text-[18px]">{card.title}</h4>
              <p className="leading-[1.7]">
                {card.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
