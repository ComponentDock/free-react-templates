const testimonials = [
  {
    quote:
      'Excellent service! They installed our new AC system quickly and professionally. Highly recommended for anyone needing HVAC services.',
    name: 'Sophie Jefferson',
    location: 'Swindon, England',
    avatar: 'frostguard-avatar-1',
  },
  {
    quote:
      'Their maintenance team keeps our system running perfectly. We have been customers for 3 years and never had an issue.',
    name: 'Cynthia Moore',
    location: 'Kansas, USA',
    avatar: 'frostguard-avatar-2',
  },
  {
    quote:
      'Fast response time and fair pricing. The technician explained everything clearly and left the workspace spotless.',
    name: 'Andre Curtis',
    location: 'Dresden, Germany',
    avatar: 'frostguard-avatar-3',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-[#F3F8FC]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-['Saira_Condensed'] text-3xl md:text-4xl font-bold text-[#142336] text-center mb-10">
          What Clients Say?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-lg shadow-sm hover:border-2 hover:border-[#FAD110] transition-all"
            >
              <p className="font-['Mulish'] text-[#444444] italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="border-t border-[#FAD110] pt-4 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/100/100`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-['Saira_Condensed'] font-bold text-[#142336]">{t.name}</div>
                  <div className="font-['Mulish'] text-xs text-[#4586D5]">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
