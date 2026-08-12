import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from './social-icons'

const hours = [
  { day: 'Monday', time: '8:00AM - 9:00PM' },
  { day: 'Tuesday', time: '8:00AM - 9:00PM' },
  { day: 'Wednesday', time: '8:00AM - 9:00PM' },
  { day: 'Thursday', time: '8:00AM - 9:00PM' },
  { day: 'Friday', time: '8:00AM - 9:00PM' },
  { day: 'Saturday', time: '8:00AM - 9:00PM' },
  { day: 'Sunday', time: '8:00AM - 9:00PM' },
] as const

const instagramShots = [
  { id: 292, alt: 'Grilled dish on a plate' },
  { id: 431, alt: 'Dessert with berries' },
  { id: 1080, alt: 'Chef plating a meal' },
  { id: 429, alt: 'Wine bottle and glasses' },
  { id: 225, alt: 'Pasta with fresh herbs' },
  { id: 312, alt: 'Cozy restaurant table' },
] as const

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'YouTube', icon: YouTubeIcon },
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim().length > 0) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#3c312e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-script text-4xl" aria-label="Forno home">
              Forno
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#home"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Open Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className="text-white/70">{entry.day}</span>
                  <span className="text-primary-400">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Instagram
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {instagramShots.map((shot) => (
                <a key={shot.id} href="#home" aria-label={`Instagram photo: ${shot.alt}`}>
                  <img
                    src={`https://picsum.photos/id/${shot.id}/200/200`}
                    alt={shot.alt}
                    loading="lazy"
                    className="h-16 w-16 object-cover"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Subscribe to receive seasonal menus and private event invitations.
            </p>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-primary-400">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <Button
                  type="submit"
                  aria-label="Subscribe"
                  className="h-auto rounded-md px-4 py-2.5"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/60 sm:flex-row lg:px-8">
          <p>© 2026 Forno. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
