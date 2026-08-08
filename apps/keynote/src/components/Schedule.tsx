const days = [
  {
    day: 'Day 1',
    date: 'Fri, Sep 18',
    sessions: [
      { time: '9:00 AM', title: 'Registration & Neural Breakfast' },
      { time: '10:00 AM', title: 'Opening Keynote: Building Trustworthy AI Systems at Scale' },
      { time: '11:30 AM', title: 'Multimodal Foundations: Vision, Language, and Beyond' },
      { time: '1:00 PM', title: 'Lunch & Sponsor Expo' },
      { time: '2:30 PM', title: 'Workshop: Building Production RAG Systems' },
      { time: '4:00 PM', title: 'Panel: The Future of Open Source AI' },
      { time: '6:00 PM', title: 'Welcome Reception & AI Art Gallery' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sat, Sep 19',
    sessions: [
      { time: '9:00 AM', title: 'Breakfast & Birds of a Feather' },
      { time: '10:00 AM', title: 'Efficient Training at Frontier Scale' },
      { time: '11:30 AM', title: 'Sub-100ms Inference: The Engineering Behind Speed' },
      { time: '1:00 PM', title: 'Lunch' },
      { time: '2:30 PM', title: 'Workshop: Fine-tuning LLMs for Your Domain' },
      { time: '4:00 PM', title: 'Workshop: Building AI Agents with Tool Use' },
      { time: '8:00 PM', title: 'Conference Party: Neon Night' },
    ],
  },
  {
    day: 'Day 3',
    date: 'Sun, Sep 20',
    sessions: [
      { time: '9:00 AM', title: 'Breakfast' },
      { time: '10:00 AM', title: 'Lightning Talks: Community Innovations' },
      { time: '11:30 AM', title: 'Panel: AI Regulation & The Road Ahead' },
      { time: '1:00 PM', title: 'Lunch' },
      { time: '2:30 PM', title: 'Hackathon Demos & Judging' },
      { time: '4:30 PM', title: 'Closing Keynote: The Next Frontier' },
      { time: '6:00 PM', title: 'Closing Remarks & Farewell Happy Hour' },
    ],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="bg-gray-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Three Days of Innovation
          </h2>
          <p className="mt-4 text-gray-400">
            Keynotes, workshops, panels, and plenty of hallway track.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {days.map((day) => (
            <div key={day.day} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-baseline justify-between border-b border-gray-800 pb-4">
                <h3 className="font-display text-lg font-bold text-primary-400">{day.day}</h3>
                <span className="text-sm text-gray-400">{day.date}</span>
              </div>
              <ul className="mt-4 space-y-4">
                {day.sessions.map((session) => (
                  <li key={session.title} className="flex gap-3">
                    <span className="w-16 flex-shrink-0 text-sm font-medium text-gray-500">
                      {session.time}
                    </span>
                    <span className="text-sm text-gray-200">{session.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
