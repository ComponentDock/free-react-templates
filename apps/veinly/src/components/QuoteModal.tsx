import { useEffect, useState, type FormEvent } from 'react'
import { X } from 'lucide-react'

interface QuoteModalProps {
  open: boolean
  onClose: () => void
}

const inputClass =
  'h-[52px] w-full rounded border border-gray-300 bg-white px-4 text-body outline-none transition-colors focus:border-brand'

/** "Get A Quote" modal opened by the navbar button: a quote-request form
 *  with the same fields as the contact form plus a close control. */
export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get A Quote"
      data-testid="quote-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
    >
      <div className="w-full max-w-3xl rounded bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-xl font-bold text-black">Get A Quote</h2>
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-500 transition-colors hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 p-5" aria-label="Quote form">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="sr-only">First name</span>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Last name</span>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className={inputClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              placeholder="Write your message."
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-body outline-none transition-colors focus:border-brand"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded bg-brand px-5 py-3 font-bold text-white transition-colors hover:bg-primary-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
