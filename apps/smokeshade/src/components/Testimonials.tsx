const testimonials = [
  {
    name: 'Travis Crawford',
    role: 'Designer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    photo: 'https://picsum.photos/seed/smokeshade-travis/100/100',
  },
  {
    name: 'Noah Padilla',
    role: 'Designer',
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    photo: 'https://picsum.photos/seed/smokeshade-noah/100/100',
  },
  {
    name: 'Travis Crawford',
    role: 'Designer',
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    photo: 'https://picsum.photos/seed/smokeshade-travis2/100/100',
  },
  {
    name: 'Noah Padilla',
    role: 'Designer',
    quote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: 'https://picsum.photos/seed/smokeshade-noah2/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#191919] py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="flex gap-8 overflow-x-auto">
          {testimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="min-w-[300px] flex-1 rounded-lg bg-[#222222] p-8"
            >
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-[#e32879]">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-[#b3b3b3]">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
