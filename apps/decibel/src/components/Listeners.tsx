import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

const listeners = [
  {
    name: 'Megan Smith',
    quote:
      'Decibel keeps my whole week moving — the morning show is the only alarm clock that actually works for me.',
    avatar: 'https://picsum.photos/seed/decibel-listener-1/200/200',
  },
  {
    name: 'Brooke Cagle',
    quote:
      'The featured mixes are unreal. I have discovered more new artists here than anywhere else on the web.',
    avatar: 'https://picsum.photos/seed/decibel-listener-2/200/200',
  },
  {
    name: 'Philip Martin',
    quote:
      'As a night-shift nurse, the late night sessions are my soundtrack. Great hosts, zero dead air.',
    avatar: 'https://picsum.photos/seed/decibel-listener-3/200/200',
  },
  {
    name: 'Sara Chen',
    quote:
      'Clean sound, honest playlists and interviews that actually ask good questions. Five stars.',
    avatar: 'https://picsum.photos/seed/decibel-listener-4/200/200',
  },
  {
    name: 'Daniel Reyes',
    quote:
      'I tune in for the classic hits block every Friday. It feels like a radio station made for me.',
    avatar: 'https://picsum.photos/seed/decibel-listener-5/200/200',
  },
] as const

export function Listeners() {
  const [index, setIndex] = useState(0)
  const listener = listeners[index]!

  return (
    <section id="listeners" className="bg-dark py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Love By Our Listeners"
          intro="A few words from the people who keep the station alive."
        />
        <div className="bg-white p-6 text-center md:p-10">
          <img
            src={listener.avatar}
            alt={`Avatar of ${listener.name}`}
            className="mx-auto h-24 w-24 rounded-full object-cover"
          />
          <h3 className="mt-5 font-display text-xl font-light text-night">{listener.name}</h3>
          <p className="mt-3 font-normal italic text-night/70">&ldquo;{listener.quote}&rdquo;</p>
        </div>
        <div
          className="mt-6 flex justify-center gap-2"
          role="group"
          aria-label="Choose testimonial"
        >
          {listeners.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={i === index}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === index ? 'bg-primary' : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
