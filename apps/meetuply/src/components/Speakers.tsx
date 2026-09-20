import { Globe, MessageSquare, Send, Share2 } from 'lucide-react'

const SPEAKERS = [
  {
    name: 'John Deo',
    role: 'Web Developer',
    image: 'https://picsum.photos/seed/meetuply-speaker1/400/400',
  },
  {
    name: 'Bruno Ballo',
    role: 'UI/UX Designer',
    image: 'https://picsum.photos/seed/meetuply-speaker2/400/400',
  },
  {
    name: 'Monica Aria',
    role: 'CEO, TechCorp',
    image: 'https://picsum.photos/seed/meetuply-speaker3/400/400',
  },
  {
    name: 'Daniel Wood',
    role: 'Data Scientist',
    image: 'https://picsum.photos/seed/meetuply-speaker4/400/400',
  },
]

const SOCIALS = [
  { icon: Globe, label: 'Facebook' },
  { icon: MessageSquare, label: 'Twitter' },
  { icon: Send, label: 'Instagram' },
  { icon: Share2, label: 'LinkedIn' },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-sm font-light uppercase tracking-widest text-gray-400">
          Who&apos;s
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-charcoal">Our Speakers</h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.name} className="group text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-brand/0 transition-colors group-hover:bg-brand/80">
                  <div className="flex gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                    {SOCIALS.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href="#"
                          aria-label={social.label}
                          className="text-white"
                        >
                          <Icon size={16} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-charcoal">{speaker.name}</h4>
              <p className="text-sm text-brand">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
