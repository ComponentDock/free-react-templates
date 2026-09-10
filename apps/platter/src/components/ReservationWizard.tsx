import { useState } from 'react'

interface FormData {
  people: string
  date: string
  timeHour: string
  timePeriod: string
  fullName: string
  email: string
  phone: string
}

const initialData: FormData = {
  people: '1',
  date: '',
  timeHour: '7',
  timePeriod: 'PM',
  fullName: '',
  email: '',
  phone: '',
}

const peopleOptions = Array.from({ length: 10 }, (_, i) => String(i + 1))
const hourOptions = Array.from({ length: 12 }, (_, i) => String(i + 1))

function StepIndicator({ step }: { step: number }) {
  return <span className="font-body text-sm text-surface-400">{step} / 3</span>
}

function StepOne({
  data,
  onChange,
  onNext,
}: {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
  onNext: () => void
}) {
  const canProceed = data.date.trim() !== ''

  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <h1 className="font-playfair text-3xl font-bold uppercase tracking-wide">Book a Table</h1>
      <p className="font-script text-lg text-brand-400">~ Check out our place ~</p>

      <div className="mt-4 w-full space-y-4 px-4">
        <div>
          <label
            htmlFor="people"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            People
          </label>
          <select
            id="people"
            value={data.people}
            onChange={(e) => onChange('people', e.target.value)}
            className="w-full border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
          >
            {peopleOptions.map((n) => (
              <option key={n} value={n} className="text-surface-900">
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={data.date}
            onChange={(e) => onChange('date', e.target.value)}
            className="w-full border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            Time
          </label>
          <div className="flex gap-3">
            <select
              id="time"
              value={data.timeHour}
              onChange={(e) => onChange('timeHour', e.target.value)}
              className="flex-1 border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
            >
              {hourOptions.map((h) => (
                <option key={h} value={h} className="text-surface-900">
                  {h}
                </option>
              ))}
            </select>
            <select
              value={data.timePeriod}
              onChange={(e) => onChange('timePeriod', e.target.value)}
              className="flex-1 border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
            >
              <option value="AM" className="text-surface-900">
                AM
              </option>
              <option value="PM" className="text-surface-900">
                PM
              </option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className="mt-4 rounded border border-white px-8 py-2 font-body font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-surface-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

function StepTwo({
  data,
  onChange,
  onBack,
  onNext,
}: {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
  onBack: () => void
  onNext: () => void
}) {
  const canProceed = data.fullName.trim() !== '' && data.email.trim() !== ''

  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <h1 className="font-playfair text-3xl font-bold uppercase tracking-wide">Your Details</h1>
      <p className="font-script text-lg text-brand-400">~ Almost there ~</p>

      <div className="mt-4 w-full space-y-4 px-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={data.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            className="w-full border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium uppercase tracking-wider text-surface-300"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full border-b border-surface-400 bg-transparent py-2 font-body text-white outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={onBack}
          className="rounded border border-white px-8 py-2 font-body font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-surface-900"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="rounded border border-white px-8 py-2 font-body font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-surface-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

function StepThree({
  data,
  onBack,
  onConfirm,
}: {
  data: FormData
  onBack: () => void
  onConfirm: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <h1 className="font-playfair text-3xl font-bold uppercase tracking-wide">Confirm Booking</h1>
      <p className="font-script text-lg text-brand-400">~ Review and confirm ~</p>

      <div className="mt-4 w-full space-y-3 px-4">
        <div className="flex justify-between border-b border-surface-400 py-2">
          <span className="text-sm uppercase tracking-wider text-surface-300">People</span>
          <span className="font-body">{data.people}</span>
        </div>
        <div className="flex justify-between border-b border-surface-400 py-2">
          <span className="text-sm uppercase tracking-wider text-surface-300">Date</span>
          <span className="font-body">{data.date}</span>
        </div>
        <div className="flex justify-between border-b border-surface-400 py-2">
          <span className="text-sm uppercase tracking-wider text-surface-300">Time</span>
          <span className="font-body">
            {data.timeHour} {data.timePeriod}
          </span>
        </div>
        <div className="flex justify-between border-b border-surface-400 py-2">
          <span className="text-sm uppercase tracking-wider text-surface-300">Name</span>
          <span className="font-body">{data.fullName}</span>
        </div>
        <div className="flex justify-between border-b border-surface-400 py-2">
          <span className="text-sm uppercase tracking-wider text-surface-300">Email</span>
          <span className="font-body">{data.email}</span>
        </div>
        {data.phone && (
          <div className="flex justify-between border-b border-surface-400 py-2">
            <span className="text-sm uppercase tracking-wider text-surface-300">Phone</span>
            <span className="font-body">{data.phone}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={onBack}
          className="rounded border border-white px-8 py-2 font-body font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-surface-900"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="rounded border border-white px-8 py-2 font-body font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-surface-900"
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export function ReservationWizard() {
  const [step, setStep] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const [data, setData] = useState<FormData>(initialData)

  function handleChange(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center text-white">
        <h1 className="font-playfair text-4xl font-bold uppercase tracking-wide">
          Reservation Confirmed!
        </h1>
        <p className="font-script mt-4 text-xl text-brand-400">~ We look forward to seeing you ~</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-900 p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl">
        {/* Left: Food Image */}
        <div className="hidden w-3/5 md:block">
          <img
            src="https://picsum.photos/seed/platter-food/800/1200"
            alt="Delicious restaurant cuisine"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Form Panel */}
        <div className="flex w-full flex-col justify-between bg-surface-900 p-8 md:w-2/5">
          {step === 1 && <StepOne data={data} onChange={handleChange} onNext={() => setStep(2)} />}
          {step === 2 && (
            <StepTwo
              data={data}
              onChange={handleChange}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <StepThree data={data} onBack={() => setStep(2)} onConfirm={() => setConfirmed(true)} />
          )}
          <div className="mt-6 text-right">
            <StepIndicator step={step} />
          </div>
        </div>
      </div>
    </div>
  )
}
