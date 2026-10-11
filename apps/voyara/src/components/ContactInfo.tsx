const COLUMNS = [
  {
    title: 'Visit Our Office',
    lines: ['12 Harbour Road, Suite 40', 'Brightwater Bay, 4207'],
  },
  {
    title: "Let's call us",
    lines: ['Phone: 01 488 9977', 'Phone: 02 488 9978', 'Fax: (011) 832 7741'],
  },
  {
    title: "Let's Email Us",
    lines: ['stay@voyara.com', 'rooms@voyara.com', 'press@voyara.com'],
  },
  {
    title: 'Customer Support',
    lines: ['support@voyara.com', 'booking@voyara.com', 'help@voyara.com'],
  },
] as const

/* Light lavender band with four centered contact columns. */
export function ContactInfo() {
  return (
    <section id="contact" data-testid="contact-info" className="bg-lavender py-[100px]">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="text-[18px] font-semibold text-ink">{column.title}</h4>
            <div className="mt-4">
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
