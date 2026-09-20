import { Globe, Mail, Share2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Speaker {
  name: string
  role: string
  bio: string
  image: string
}

const SPEAKERS: Speaker[] = [
  {
    name: 'Emely Peters',
    role: 'Web Designer',
    bio: 'Emely has over 15 years of experience in web design and leads a team of designers at a Fortune 500 company.',
    image: 'https://picsum.photos/seed/speaker1/400/500',
  },
  {
    name: 'Alex Anchor',
    role: 'Web Designer',
    bio: 'Alex is a full-stack developer specializing in React and Node.js, with a passion for teaching code.',
    image: 'https://picsum.photos/seed/speaker2/400/500',
  },
  {
    name: 'Aaron Thomas',
    role: 'Web Designer',
    bio: 'Aaron conducts user research for top tech startups and publishes widely on human-centered design.',
    image: 'https://picsum.photos/seed/speaker3/400/500',
  },
  {
    name: 'Chris Mathews',
    role: 'Web Designer',
    bio: 'Chris bridges design and engineering, having shipped products used by millions around the world.',
    image: 'https://picsum.photos/seed/speaker4/400/500',
  },
]

function SocialIcons() {
  return (
    <div className="flex gap-3">
      <a href="#" aria-label="Globe" className="text-text transition-colors hover:text-primary-400">
        <Globe size={18} />
      </a>
      <a href="#" aria-label="Mail" className="text-text transition-colors hover:text-primary-400">
        <Mail size={18} />
      </a>
      <a href="#" aria-label="Share" className="text-text transition-colors hover:text-primary-400">
        <Share2 size={18} />
      </a>
    </div>
  )
}

export function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Speakers</h2>
          <div className="mx-auto h-1 w-16 rounded bg-gradient-to-r from-primary-700 to-primary-400" />
          <p className="mt-6 max-w-xl mx-auto text-text text-sm leading-relaxed">
            Learn from industry leaders who are shaping the future of web design and development.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {SPEAKERS.map((speaker, i) => {
            const reversed = i % 2 !== 0
            return (
              <div
                key={speaker.name}
                className={cn(
                  'flex flex-col items-center gap-8 md:flex-row',
                  reversed && 'md:flex-row-reverse',
                )}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full max-w-sm rounded-lg object-cover md:w-1/2"
                />
                <div className={cn('flex flex-col gap-3 md:w-1/2', reversed && 'md:text-right')}>
                  <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-sm font-semibold text-primary-400 uppercase">{speaker.role}</p>
                  <p className="text-sm leading-relaxed text-text">{speaker.bio}</p>
                  <div className={cn(reversed && 'md:justify-end', 'flex')}>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
