import { Cross, Heart } from 'lucide-react'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './social-icons'

const aboutLinks = [
  'Staff',
  'Beliefs',
  'History',
  'Mission',
  'Wedding & Funerals',
  'Jobs & Internship',
  'Fellowships',
] as const

const connectLinks = [
  'Home Groups',
  'Recovery Groups',
  'Memberships',
  'Children & Students',
  'Volunteer',
  'Counseling',
  'Assistance',
] as const

const serviceHours = [
  'Saturday Prayer Meeting: 10:00 am to 11:30 am',
  'Sunday Service: 8:30 am to 11:30 am',
] as const

const socials = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'YouTube', Icon: YouTubeIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Vesper home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-script text-3xl leading-none">
                <span className="text-gold">Vesper</span> Church
              </h2>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <FooterColumn title="About" links={aboutLinks} />
          {/* Connect */}
          <FooterColumn title="Connect" links={connectLinks} />

          {/* Service Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Service Hours
            </h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/60">
              {serviceHours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            Copyright ©2026 All rights reserved | This template is made with{' '}
            <Heart className="inline h-4 w-4 text-red-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gold transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{title}</h3>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="text-sm text-white/60 transition-colors hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
