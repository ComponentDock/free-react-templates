import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

export interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="contact"
      className={`relative bg-cover bg-center bg-no-repeat py-20 md:py-28 ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(13,13,26,0.9), rgba(13,13,26,0.9)), url(https://picsum.photos/seed/convention-cta/1920/800)',
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          className="mb-8 text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Book Your Tickets Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-4"
          data-testid="registration-form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-[#ff2d9b]"
              aria-label="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-[#ff2d9b]"
              aria-label="Last Name"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-[#ff2d9b]"
            aria-label="Phone Number"
          />
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full appearance-none rounded bg-white/10 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/20 focus:ring-[#ff2d9b]"
            aria-label="Select Price"
          >
            <option value="" className="text-gray-900">
              Select Price
            </option>
            <option value="basic" className="text-gray-900">
              Basic — $29/mo
            </option>
            <option value="standard" className="text-gray-900">
              Standard — $49/mo
            </option>
            <option value="premium" className="text-gray-900">
              Premium — $79/mo
            </option>
          </select>
          <Button type="submit" className="w-full bg-[#ff2d9b] text-white hover:bg-[#e6288c]">
            Register Now
          </Button>
        </form>
      </div>
    </section>
  )
}
