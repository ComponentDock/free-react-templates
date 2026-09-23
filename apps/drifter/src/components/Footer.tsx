import { Send } from 'lucide-react'

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.18 10.18 0 012.25 6.375c-.328-.063-3.625-.734-6.937-.328-.068-.163-.134-.328-.203-.496-.203-.5-.422-.997-.656-1.484 3.688-1.5 5.344-3.672 5.547-4.067zM12 1.828c2.61 0 4.984.938 6.813 2.5-.156.359-1.625 2.375-5.172 3.672-1.625-2.984-3.406-5.375-3.672-5.75A10.284 10.284 0 0112 1.828zM8.156 3.094c.25.359 2 2.813 3.656 5.719-4.609 1.219-8.64 1.188-9.078 1.188a10.21 10.21 0 015.422-6.907zM1.813 12.03v-.328c.422.016 5.156.047 10.078-1.375.281.547.547 1.109.797 1.672-.125.031-.25.078-.375.125-5.141 1.656-7.875 6.187-8.047 6.484A10.17 10.17 0 011.813 12.03zM12 22.172a10.12 10.12 0 01-6.313-2.188c.141-.281 2.172-4.141 7.703-5.984.016-.016.047-.016.063-.031a41.86 41.86 0 012.375 8.437A10.15 10.15 0 0112 22.172zm4.547-1.703a42.48 42.48 0 00-2.25-8.141c3.078-.5 5.766.313 6.094.422a10.24 10.24 0 01-3.844 7.719z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const socials = [
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Dribbble', href: '#', Icon: DribbbleIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-bg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">About Me</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Do you want to be even more successful? Learn to love learning and growth. The more
              effort you put into improving your skills, the more you will get out of it.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-3 text-sm text-white/60">Stay updated with our latest trends</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none"
                aria-label="Email for newsletter"
              />
              <button
                className="rounded-r bg-brand-purple px-4 text-white transition-colors hover:bg-brand-teal"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Follow Me</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-brand-purple hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal underline transition-colors hover:text-brand-purple"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
