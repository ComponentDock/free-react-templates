import type { FormEvent } from 'react'

interface PersonalInfoProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function PersonalInfo({ onSubmit }: PersonalInfoProps) {
  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold text-[var(--color-heading)]">
        Personal Information
      </h2>
      <p className="mb-6 text-[14px] font-semibold text-[var(--color-body)]">
        Please enter your personal information to create your account.
      </p>

      <form onSubmit={onSubmit}>
        <div className="mb-4 flex gap-3">
          <fieldset className="flex-1 border border-[var(--color-border)] px-3 py-2">
            <legend className="px-1 text-[11px] font-bold text-[var(--color-muted)]">
              First Name
            </legend>
            <input
              type="text"
              aria-label="First Name"
              className="w-full border-none bg-transparent py-1 text-[14px] font-semibold text-[var(--color-heading)] outline-none"
            />
          </fieldset>
          <fieldset className="flex-1 border border-[var(--color-border)] px-3 py-2">
            <legend className="px-1 text-[11px] font-bold text-[var(--color-muted)]">
              Last Name
            </legend>
            <input
              type="text"
              aria-label="Last Name"
              className="w-full border-none bg-transparent py-1 text-[14px] font-semibold text-[var(--color-heading)] outline-none"
            />
          </fieldset>
        </div>

        <fieldset className="mb-4 border border-[var(--color-border)] px-3 py-2">
          <legend className="px-1 text-[11px] font-bold text-[var(--color-muted)]">Email</legend>
          <input
            type="email"
            aria-label="Email"
            className="w-full border-none bg-transparent py-1 text-[14px] font-semibold text-[var(--color-heading)] outline-none"
          />
        </fieldset>

        <fieldset className="mb-4 border border-[var(--color-border)] px-3 py-2">
          <legend className="px-1 text-[11px] font-bold text-[var(--color-muted)]">
            Phone Number
          </legend>
          <input
            type="tel"
            aria-label="Phone Number"
            className="w-full border-none bg-transparent py-1 text-[14px] font-semibold text-[var(--color-heading)] outline-none"
          />
        </fieldset>

        <div className="mb-4">
          <label className="mb-1 block text-[11px] font-bold text-[var(--color-muted)]">
            Birth Date
          </label>
          <div className="flex gap-3">
            <select
              aria-label="Month"
              className="flex-1 border border-[var(--color-border)] bg-white px-2 py-2 text-[14px] font-semibold text-[var(--color-heading)]"
            >
              <option value="">MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                  {String(i + 1).padStart(2, '0')}
                </option>
              ))}
            </select>
            <select
              aria-label="Day"
              className="flex-1 border border-[var(--color-border)] bg-white px-2 py-2 text-[14px] font-semibold text-[var(--color-heading)]"
            >
              <option value="">DD</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                  {String(i + 1).padStart(2, '0')}
                </option>
              ))}
            </select>
            <select
              aria-label="Year"
              className="flex-1 border border-[var(--color-border)] bg-white px-2 py-2 text-[14px] font-semibold text-[var(--color-heading)]"
            >
              <option value="">YYYY</option>
              {Array.from({ length: 30 }, (_, i) => 2006 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <fieldset className="border border-[var(--color-border)] px-3 py-2">
          <legend className="px-1 text-[11px] font-bold text-[var(--color-muted)]">SSN</legend>
          <input
            type="text"
            aria-label="SSN"
            placeholder="XXX-XX-XXXX"
            className="w-full border-none bg-transparent py-1 text-[14px] font-semibold text-[var(--color-heading)] outline-none placeholder:text-[var(--color-muted)]"
          />
        </fieldset>
      </form>
    </div>
  )
}
