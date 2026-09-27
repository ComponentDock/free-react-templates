import { ArrowRight, ChevronDown } from 'lucide-react'
import type { FormEvent } from 'react'

const CLASS_OPTIONS = ['Class 01', 'Class 02', 'Class 03'] as const

export function RegistrationForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="mx-auto my-auto flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10 sm:bg-[url('https://picsum.photos/seed/yogaflow-bg/1920/1080')]">
      <div className="flex w-full max-w-[900px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.2)] sm:flex-row sm:translate-x-[20px]">
        {/* Image panel */}
        <div className="hidden w-[36%] shrink-0 sm:block">
          <img
            src="https://picsum.photos/seed/yogaflow-class/500/600"
            alt="Yoga class session"
            className="h-full w-full object-cover sm:rounded-l-[20px] sm:translate-x-[-20px]"
          />
        </div>

        {/* Form panel */}
        <form
          onSubmit={handleSubmit}
          className="w-full px-6 pt-10 pb-8 sm:min-w-0 sm:flex-1 sm:px-10 sm:pt-[42px]"
        >
          <h3 className="mb-5 text-center font-[family-name:var(--font-heading)] text-[25px] font-semibold uppercase text-[var(--color-ink)]">
            Make An Appointment
          </h3>

          {/* Row 1: Name + Email */}
          <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:gap-5">
            <input
              type="text"
              placeholder="Name"
              className="h-[47px] flex-1 rounded-[5px] border border-[var(--color-border)] bg-transparent px-[19px] text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-focus)] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mail"
              className="h-[47px] flex-1 rounded-[5px] border border-[var(--color-border)] bg-transparent px-[19px] text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-focus)] focus:outline-none"
            />
          </div>

          {/* Row 2: Phone + Class select */}
          <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:gap-5">
            <input
              type="text"
              placeholder="Phone"
              className="h-[47px] flex-1 rounded-[5px] border border-[var(--color-border)] bg-transparent px-[19px] text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-focus)] focus:outline-none"
            />
            <div className="relative flex-1">
              <select
                defaultValue=""
                className="h-[47px] w-full appearance-none rounded-[5px] border border-[var(--color-border)] bg-transparent px-[19px] text-[15px] text-[var(--color-placeholder)] focus:border-[var(--color-focus)] focus:outline-none"
              >
                <option value="" disabled>
                  Choose Your Class
                </option>
                {CLASS_OPTIONS.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-[var(--color-placeholder)]"
                size={16}
              />
            </div>
          </div>

          {/* Message textarea */}
          <textarea
            placeholder="Message"
            className="mb-0 w-full resize-none rounded-[5px] border border-[var(--color-border)] bg-transparent px-[19px] pt-3 pb-3 text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-focus)] focus:outline-none"
            style={{ height: 130 }}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="mx-auto mt-7 flex h-[47px] w-[174px] cursor-pointer items-center justify-center rounded-[5px] bg-[var(--color-brand)] font-medium uppercase text-white transition-all duration-500 hover:bg-[var(--color-brand-hover)] hover:animate-pulse"
          >
            Book Now
            <ArrowRight className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
