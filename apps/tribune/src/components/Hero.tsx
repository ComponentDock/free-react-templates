import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

function useCountdown(targetDate: Date) {
  const [remaining, setRemaining] = useState(() => Math.max(0, targetDate.getTime() - Date.now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.max(0, targetDate.getTime() - Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

const DEFAULT_TARGET = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-dark-surface/90 p-6 backdrop-blur">
      <h2 className="mb-4 text-xl font-bold text-white">Join Conference</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="tel"
          placeholder="Enter your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
        />
        <label className="flex items-center gap-2 text-xs text-gray-300">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-primary"
          />
          I have read and accept the terms and conditions
        </label>
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-dark">
          Join now
        </Button>
      </div>
    </form>
  )
}

interface HeroProps {
  targetDate?: Date
}

export function Hero({ targetDate = DEFAULT_TARGET }: HeroProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tribune-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Conference 2025
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Business Leaders
              <br />
              <span className="text-primary">Summit</span>
            </h1>
            <p className="mb-6 text-gray-300">
              <span className="mr-2 inline-block">📅</span>
              20–23 November 2025 — Los Angeles, CA
            </p>
            <div className="flex gap-3" role="timer" aria-label="Countdown timer">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Min' },
                { value: seconds, label: 'Sec' },
              ].map((item) => (
                <div key={item.label} className="rounded bg-dark-surface px-4 py-3 text-center">
                  <span className="block text-2xl font-bold text-white">{item.value}</span>
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2" />
          <div className="md:col-span-4">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
