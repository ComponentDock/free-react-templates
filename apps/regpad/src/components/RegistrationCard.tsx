import type { FormEvent } from 'react'
import { Calendar } from 'lucide-react'

const genderOptions = [
  { value: '', label: 'Gender', disabled: true },
  { value: 'male', label: 'Male', disabled: false },
  { value: 'female', label: 'Female', disabled: false },
  { value: 'other', label: 'Other', disabled: false },
] as const

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function RegistrationCard() {
  return (
    <div className="w-full max-w-[780px] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)] max-md:flex-col md:flex md:[display:table]">
      {/* Left column: photo */}
      <div
        className="min-h-[400px] bg-cover bg-center max-md:pt-[400px] md:[display:table-cell] md:w-1/2"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/regpad-portrait/800/600')`,
        }}
        role="img"
        aria-label="Registration event photo"
      />

      {/* Right column: form */}
      <div className="bg-[var(--color-card-bg)] p-[57px_65px] pb-[65px] max-md:p-[37px_30px] max-md:pb-[45px] md:[display:table-cell] md:w-1/2">
        <h2 className="mb-9 text-[24px] font-normal leading-tight text-[var(--color-text-white)]">
          Registration Info
        </h2>

        <form onSubmit={handleSubmit} className="space-y-[33px]">
          {/* Name */}
          <div className="border-b border-[var(--color-border)]">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border-none bg-transparent py-[5px] text-[16px] text-[var(--color-placeholder)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
            />
          </div>

          {/* Birthdate */}
          <div className="flex items-center border-b border-[var(--color-border)]">
            <label htmlFor="birthdate" className="sr-only">
              Birthdate
            </label>
            <input
              id="birthdate"
              type="text"
              placeholder="Birthdate"
              className="w-full border-none bg-transparent py-[5px] text-[16px] text-[var(--color-placeholder)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
            />
            <Calendar
              size={18}
              className="shrink-0 text-[var(--color-placeholder)]"
              aria-hidden="true"
            />
          </div>

          {/* Gender */}
          <div className="border-b border-[var(--color-border)]">
            <label htmlFor="gender" className="sr-only">
              Gender
            </label>
            <select
              id="gender"
              className="w-full appearance-none border-none bg-transparent py-[5px] text-[16px] text-[var(--color-placeholder)] focus:outline-none"
              defaultValue=""
            >
              {genderOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div className="border-b border-[var(--color-border)]">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full border-none bg-transparent py-[5px] text-[16px] text-[var(--color-placeholder)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="border-b border-[var(--color-border)]">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Phone"
              className="w-full border-none bg-transparent py-[5px] text-[16px] text-[var(--color-placeholder)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-[10px]">
            <button
              type="submit"
              className="cursor-pointer rounded-[20px] border-none bg-[var(--color-btn)] px-[33px] py-0 text-[18px] font-normal leading-[40px] text-white transition-colors duration-400 hover:bg-[var(--color-btn-hover)]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
