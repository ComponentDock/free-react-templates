const members = [
  {
    name: 'Jacob Gomez',
    role: 'Lead Designer',
    photo: 'https://picsum.photos/seed/smokeshade-jacob1/200/200',
  },
  {
    name: 'Jacob Gomez',
    role: 'Art Director',
    photo: 'https://picsum.photos/seed/smokeshade-jacob2/200/200',
  },
  {
    name: 'Jacob Gomez',
    role: 'Creative Lead',
    photo: 'https://picsum.photos/seed/smokeshade-jacob3/200/200',
  },
]

const socialIcons = ['Facebook', 'Twitter', 'Instagram', 'Pinterest']

export function Team() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#0d0a27]">Top Designers</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {members.map((member, i) => (
            <div key={`${member.name}-${i}`} className="text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              <div className="mb-4 flex justify-center gap-3">
                {socialIcons.map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={icon}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e32879] text-xs text-white transition-colors hover:bg-[#c41f65]"
                  >
                    {icon[0]}
                  </a>
                ))}
              </div>
              <h4 className="text-lg font-bold text-[#0d0a27]">{member.name}</h4>
              <p className="text-sm text-[#5c5c5c]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
