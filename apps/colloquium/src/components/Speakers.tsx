import { Globe, MessageSquare, Send, Share2 } from 'lucide-react'

export interface SpeakersProps {
  className?: string
}

const speakers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    photo: 'https://picsum.photos/seed/speaker-alice/300/300',
  },
  {
    name: 'Bob Smith',
    role: 'Cloud Architect',
    photo: 'https://picsum.photos/seed/speaker-bob/300/300',
  },
  {
    name: 'Carol White',
    role: 'DevOps Engineer',
    photo: 'https://picsum.photos/seed/speaker-carol/300/300',
  },
  {
    name: 'Dave Brown',
    role: 'UX Designer',
    photo: 'https://picsum.photos/seed/speaker-dave/300/300',
  },
  {
    name: 'Eve Davis',
    role: 'Data Scientist',
    photo: 'https://picsum.photos/seed/speaker-eve/300/300',
  },
]

export function Speakers({ className }: SpeakersProps) {
  return (
    <section id="speakers" className={`bg-[#1a1a2e] py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Who&#39;s Speaking
        </p>
        <h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Event Speakers
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative overflow-hidden rounded-lg"
              data-testid="speaker-card"
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#ff2d9b]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-200"
                  aria-label="Facebook"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-200"
                  aria-label="Twitter"
                >
                  <MessageSquare size={18} />
                </a>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-200"
                  aria-label="Instagram"
                >
                  <Send size={18} />
                </a>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-200"
                  aria-label="LinkedIn"
                >
                  <Share2 size={18} />
                </a>
              </div>
              {/* Info below */}
              <div className="p-3 text-center">
                <h3
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-xs text-gray-400">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
