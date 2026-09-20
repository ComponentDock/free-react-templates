import { Phone, Mail } from 'lucide-react'

const speakers = [
  { name: 'Will Peters', desc: 'Business Consultant at Google', seed: 'forum-sp-1' },
  { name: 'Abigail McMillan', desc: 'Product Lead at Meta', seed: 'forum-sp-2' },
  { name: 'Jean Keenan', desc: 'Strategy Director at Medium', seed: 'forum-sp-3' },
  { name: 'Justin Clark', desc: 'Engineering Manager at Slack', seed: 'forum-sp-4' },
]

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export interface SpeakersProps {
  className?: string
}

export function Speakers({ className }: SpeakersProps) {
  return (
    <section id="speakers" className={`bg-[#04091e] py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
          Speakers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-lg bg-white/5">
              <img
                src={`https://picsum.photos/seed/${s.seed}/400/300`}
                alt={s.name}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-white">{s.name}</h3>
                <p className="mb-3 text-sm text-gray-400">{s.desc}</p>
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                  <Phone size={14} /> <span>+1 234 567 890</span>
                </div>
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                  <Mail size={14} /> <span>info@example.com</span>
                </div>
                <div className="flex gap-3 text-gray-500">
                  <a href="#" aria-label="Facebook" className="hover:text-[#8ab92d]">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-[#8ab92d]">
                    <TwitterIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-[#8ab92d]">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
