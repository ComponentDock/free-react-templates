import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink dark:text-gray-100">Get In Touch</h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Have a project in mind? We would love to hear from you. Send us a message and we will
            respond as soon as possible.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-gray-100">Address</h3>
                <p className="mt-1 text-sm text-smoke dark:text-gray-400">
                  123 Creative Street
                  <br />
                  Design District, NY 10001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-gray-100">Phone</h3>
                <p className="mt-1 text-sm text-smoke dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-gray-100">Email</h3>
                <p className="mt-1 text-sm text-smoke dark:text-gray-400">hello@mortar.studio</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className={cn(
                    'w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400',
                    'focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30',
                    'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500',
                  )}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className={cn(
                    'w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400',
                    'focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30',
                    'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500',
                  )}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className={cn(
                  'w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400',
                  'focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30',
                  'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500',
                )}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className={cn(
                  'w-full resize-none rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400',
                  'focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30',
                  'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500',
                )}
              />
            </div>
            <button
              type="submit"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500',
              )}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
