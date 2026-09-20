import { useState } from 'react'

const tabs = ['12 Jan', '13 Jan', '14 Jan', '15 Jan']

const programs = [
  [
    {
      title: 'Fully Innovative Conference',
      speaker: 'Patricia Stone',
      time: '9:00 AM – 11:00 AM',
      desc: 'Opening keynote on the future of innovation in tech.',
    },
    {
      title: 'AI in Business',
      speaker: 'James Oliver',
      time: '11:30 AM – 1:00 PM',
      desc: 'How artificial intelligence is transforming business operations.',
    },
    {
      title: 'Startup Pitch',
      speaker: 'Carla Banks',
      time: '2:00 PM – 4:00 PM',
      desc: 'Live pitch session featuring the top 5 startups.',
    },
  ],
  [
    {
      title: 'Cloud Architecture',
      speaker: 'William Smith',
      time: '9:00 AM – 11:00 AM',
      desc: 'Building scalable cloud solutions for enterprise.',
    },
    {
      title: 'Blockchain Workshop',
      speaker: 'Jessica Black',
      time: '11:30 AM – 1:00 PM',
      desc: 'Hands-on workshop on blockchain implementation.',
    },
    {
      title: 'Design Thinking',
      speaker: 'Duncan Stan',
      time: '2:00 PM – 4:00 PM',
      desc: 'Applying design thinking to product development.',
    },
  ],
  [
    {
      title: 'Data Science Panel',
      speaker: 'Elena Moore',
      time: '9:00 AM – 11:00 AM',
      desc: 'Industry experts discuss the latest in data science.',
    },
    {
      title: 'Cybersecurity Summit',
      speaker: 'Ryan Clark',
      time: '11:30 AM – 1:00 PM',
      desc: 'Protecting your organization in the digital age.',
    },
    {
      title: 'Future of Work',
      speaker: 'Patricia Stone',
      time: '2:00 PM – 4:00 PM',
      desc: 'How remote work and AI are reshaping the workplace.',
    },
  ],
  [
    {
      title: 'Closing Keynote',
      speaker: 'James Oliver',
      time: '9:00 AM – 11:00 AM',
      desc: 'Reflections on the conference and looking ahead.',
    },
    {
      title: 'Networking Session',
      speaker: 'Carla Banks',
      time: '11:30 AM – 1:00 PM',
      desc: 'Connect with fellow attendees and speakers.',
    },
    {
      title: 'Awards Ceremony',
      speaker: 'William Smith',
      time: '2:00 PM – 4:00 PM',
      desc: 'Celebrating the best innovations and speakers.',
    },
  ],
]

export function ProgramSchedule() {
  const [active, setActive] = useState(0)
  const items = programs[active]!

  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-4xl font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072] md:text-5xl">
          Program Details
        </h2>
        <p className="mb-12 text-center font-[family-name:var(--font-sans)] text-[#79709D]">
          Explore our carefully curated schedule of events and sessions.
        </p>

        <div className="mb-10 flex justify-center">
          <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`rounded-[5px] px-6 py-2 text-sm font-semibold font-[family-name:var(--font-sans)] transition ${
                  i === active
                    ? 'bg-[#302072] text-[#FDE449]'
                    : 'text-[#79709D] hover:text-[#302072]'
                }`}
                onClick={() => setActive(i)}
                aria-selected={i === active}
                role="tab"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-lg bg-[#F6F7FF] p-6">
              <img
                src={`https://picsum.photos/seed/galaflow-speaker-${active}-${i}/80/80`}
                alt={item.speaker}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="mb-1 text-lg font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072]">
                  {item.title}
                </h4>
                <p className="mb-2 text-sm font-[family-name:var(--font-sans)] text-[#79709D]">
                  {item.desc}
                </p>
                <p className="text-xs font-[family-name:var(--font-sans)] text-[#302072]">
                  {item.time}
                </p>
                <p className="mt-1 text-sm font-semibold font-[family-name:var(--font-sans)] text-[#140C40]">
                  {item.speaker}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
