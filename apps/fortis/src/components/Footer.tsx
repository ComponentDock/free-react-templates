import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { brand, quickLinks } from '../data'
import { socialLinks } from './social-icons'

/** Light #efefef footer with four widget columns — "About Me", "Quick
 *  Links", "Connect" (social circles) plus a "Newsletter" form — and a
 *  bottom copyright bar crediting Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-footer pb-8 pt-16 md:pt-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="mb-3 text-base font-bold text-black">About Me</h2>
            <p className="text-muted">
              Fortis is a web design agency crafting fast, accessible and beautiful sites for
              ambitious teams since 2016.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-9">
            <div>
              <h2 className="mb-3 text-base font-bold text-black">Quick Links</h2>
              <ul className="space-y-2.5">
                {quickLinks.map((label) => (
                  <li key={label}>
                    <a
                      href={
                        label === 'About Us' ? '#about' : label === 'Contact Us' ? '#contact' : '#'
                      }
                      className="text-brand transition-colors hover:text-black"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-base font-bold text-black">Connect</h2>
              <div className="mb-5 flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand/20 text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <h2 className="mb-3 text-base font-bold text-black">Newsletter</h2>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-[55px] min-w-0 flex-1 rounded border border-gray-300 bg-white px-4 text-body outline-none transition-colors focus:border-brand"
                />
                <Button type="submit" variant="primary" className="h-[55px] rounded-full px-8">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-5 text-sm text-muted md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>
            Made with <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand transition-colors hover:text-black"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
