const WIDGETS = [
  {
    title: 'Address',
    content: '56/8, Panthapath, West Dhanmondi, Kalabagan',
  },
  {
    title: 'Email Address',
    lines: [
      { text: 'info@artwave.com', href: 'mailto:info@artwave.com' },
      { text: 'support@artwave.com', href: 'mailto:support@artwave.com' },
    ],
  },
  {
    title: 'Phone Number',
    lines: [
      { text: '012 4562 982 3612', href: 'tel:0124562982' },
      { text: '012 6321 956 4587', href: 'tel:0126321956' },
    ],
  },
]

export function FooterWidget() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {WIDGETS.map((w) => (
            <div key={w.title}>
              <h6 className="mb-3 text-sm font-medium text-heading">{w.title}</h6>
              {w.content && (
                <p className="text-sm font-light leading-relaxed text-body">{w.content}</p>
              )}
              {w.lines && (
                <div className="space-y-1">
                  {w.lines.map((l) => (
                    <a
                      key={l.text}
                      href={l.href}
                      className="block text-sm font-light text-body transition hover:text-brand-blue"
                    >
                      {l.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
