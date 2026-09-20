import { useState } from 'react'
import { X, Globe, MessageSquare, Send } from 'lucide-react'

interface Speaker {
  name: string
  role: string
  image: string
  website?: string
  sessions?: string[]
}

const SPEAKERS: Speaker[] = [
  {
    name: 'Sarah Chen',
    role: 'AI Research Lead',
    image: 'https://picsum.photos/seed/gala-sp1/400/500',
    website: 'https://example.com',
    sessions: ['Opening Keynote', 'AI Ethics Panel'],
  },
  {
    name: 'Marcus Williams',
    role: 'CTO, TechCorp',
    image: 'https://picsum.photos/seed/gala-sp2/400/500',
    sessions: ['Panel: AI in Business'],
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Director',
    image: 'https://picsum.photos/seed/gala-sp3/400/500',
    website: 'https://example.com',
    sessions: ['Workshop: Design Thinking'],
  },
]

function SpeakerModal({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label={`${speaker.name} details`}
    >
      <div className="relative mx-4 w-full max-w-md rounded-sm bg-white p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>
        <img
          src={speaker.image}
          alt={speaker.name}
          className="mb-4 h-48 w-full rounded-sm object-cover"
        />
        <h4 className="text-xl font-bold text-navy">{speaker.name}</h4>
        <p className="mb-3 text-sm text-brand">{speaker.role}</p>
        {speaker.sessions && (
          <div className="mb-3">
            <p className="mb-1 text-xs font-semibold uppercase text-gray-500">Sessions</p>
            <ul className="list-inside list-disc text-sm text-body">
              {speaker.sessions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-3">
          {speaker.website && (
            <a
              href={speaker.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe size={18} className="text-gray-400 hover:text-brand" />
            </a>
          )}
          <a href="#" aria-label="Facebook">
            <MessageSquare size={18} className="text-gray-400 hover:text-brand" />
          </a>
          <a href="#" aria-label="Twitter">
            <Send size={18} className="text-gray-400 hover:text-brand" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Speakers() {
  const [selected, setSelected] = useState<Speaker | null>(null)

  return (
    <section id="speakers" className="bg-light-gray py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Our <span className="text-brand">Speakers</span>
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <button
              key={speaker.name}
              onClick={() => setSelected(speaker)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-white text-left shadow-sm transition-shadow hover:shadow-md"
              aria-label={`View ${speaker.name} details`}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-72 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex gap-2 pb-1">
                  <Globe size={16} className="text-white" />
                  <MessageSquare size={16} className="text-white" />
                  <Send size={16} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-navy">{speaker.name}</h4>
                <p className="text-sm text-brand">{speaker.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selected && <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
