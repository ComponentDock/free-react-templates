import { useState } from 'react'
const members = [
  {
    name: 'Ian Moore',
    role: 'Electrician',
    image: 'https://picsum.photos/seed/sitecraft-m1/300/300',
  },
  {
    name: 'Jack Clark',
    role: 'Engineer',
    image: 'https://picsum.photos/seed/sitecraft-m2/300/300',
  },
  {
    name: 'Kiven Lewis',
    role: 'Architect',
    image: 'https://picsum.photos/seed/sitecraft-m3/300/300',
  },
  {
    name: 'Charles Scott',
    role: 'Assistant Engineer',
    image: 'https://picsum.photos/seed/sitecraft-m4/300/300',
  },
] as const

const accordionItems = [
  {
    id: 'who',
    title: 'Who We Are',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 'what',
    title: 'What We Do?',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 'why',
    title: 'Why Choose Us',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
] as const

export function TeamSection() {
  const [openId, setOpenId] = useState<string | null>(accordionItems[0].id)

  return (
    <section
      id="team"
      aria-label="Our Team"
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sitecraft-team/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Team members */}
          <div className="grid grid-cols-2 gap-4">
            {members.map((m) => (
              <div key={m.name} className="group relative overflow-hidden rounded">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-sm font-semibold text-white">{m.name}</h3>
                  <span className="text-xs text-white/70">{m.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 leading-relaxed text-white/70">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn&apos;t
              listen.
            </p>
            <div className="space-y-2">
              {accordionItems.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div key={item.id} className="rounded bg-white/10">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-white"
                    >
                      {item.title}
                      <span className="text-lg">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm text-white/70">{item.content}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
