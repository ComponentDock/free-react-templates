import { useState, type FormEvent } from 'react'
import { footerColumns, brand } from '../data'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'done'>('idle')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(email.trim() === '' ? 'error' : 'done')
  }

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-normal text-navy">{column.title}</h3>
              <ul className="mt-5 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#services" className="text-sm text-body hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-normal text-navy">Subscribe</h3>
            <p className="mt-5 text-sm text-body">
              Esteem spirit temper too say adieus who direct esteem esteems luckily.
            </p>
            <form className="mt-5 flex" onSubmit={onSubmit} noValidate>
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full border border-line px-4 py-3 text-sm text-navy placeholder:text-body focus:border-brand focus:outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="ml-2 shrink-0 bg-brand px-5 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-navy"
              >
                Subscribe
              </button>
            </form>
            {status === 'error' && (
              <p role="alert" className="mt-3 text-sm text-brand">
                Add an email address to subscribe.
              </p>
            )}
            {status === 'done' && (
              <p role="status" className="mt-3 text-sm text-body">
                Thanks — {email} is on the list.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-body sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>{' '}
            — more templates at Component Dock.
          </p>
        </div>
      </div>
    </footer>
  )
}
