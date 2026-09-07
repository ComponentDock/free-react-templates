import { AlertCircle } from 'lucide-react'

interface PersonalInfoStepProps {
  email: string
  emailError?: string
  onEmailChange: (value: string) => void
  onEmailBlur: () => void
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getYearOptions(): number[] {
  const currentYear = new Date().getFullYear()
  const years: number[] = []
  for (let y = currentYear; y >= currentYear - 120; y--) {
    years.push(y)
  }
  return years
}

function getDayOptions(): number[] {
  return Array.from({ length: 31 }, (_, i) => i + 1)
}

export function PersonalInfoStep({
  email,
  emailError,
  onEmailChange,
  onEmailBlur,
}: PersonalInfoStepProps) {
  const years = getYearOptions()
  const days = getDayOptions()

  return (
    <div role="tabpanel" id="panel-0" aria-labelledby="tab-0">
      <h2 className="mb-0 text-[30px] font-bold text-ink dark:text-ink-dark">
        Personal information
      </h2>
      <p className="mb-[40px] text-[14px] text-desc">
        Please enter your information and proceed to next step so we can build your account
      </p>

      <div className="w-full max-w-[680px]">
        {/* Name row */}
        <label className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark">Name</label>
        <div className="mb-[18px] flex gap-0 max-[768px]:flex-col">
          <div className="w-1/2 px-[10px] max-[768px]:w-full max-[768px]:px-0 max-[768px]:pb-[18px]">
            <input
              type="text"
              aria-label="First name"
              className="h-[50px] w-full border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
            />
            <span className="mt-[5px] block text-[12px] text-muted">First</span>
          </div>
          <div className="w-1/2 px-[10px] max-[768px]:w-full max-[768px]:px-0">
            <input
              type="text"
              aria-label="Last name"
              className="h-[50px] w-full border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
            />
            <span className="mt-[5px] block text-[12px] text-muted">Last</span>
          </div>
        </div>

        {/* Email */}
        <div className="relative mb-[18px]">
          <label
            htmlFor="email"
            className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            onBlur={onEmailBlur}
            aria-invalid={!!emailError}
            aria-describedby={emailError ? 'email-error' : undefined}
            className={`h-[50px] w-full border bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:bg-container-dark dark:text-ink-dark ${
              emailError ? 'border-error' : 'border-line'
            }`}
          />
          {emailError && (
            <span className="absolute right-[20px] top-[50px] text-error" aria-hidden="true">
              <AlertCircle size={13} />
            </span>
          )}
          {emailError && (
            <span id="email-error" className="sr-only">
              {emailError}
            </span>
          )}
          <span className="mt-[5px] block text-[12px] text-muted">
            Example :{' '}
            <span className="font-bold text-ink dark:text-ink-dark">user@example.com</span>
          </span>
        </div>

        {/* Phone */}
        <div className="mb-[18px]">
          <label className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark">Phone</label>
          <input
            type="text"
            aria-label="Phone"
            className="h-[50px] w-full border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
          />
        </div>

        {/* Birth Date */}
        <div className="mb-[18px]">
          <label className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark">
            Birth Date
          </label>
          <div className="flex gap-[10px] max-[480px]:flex-col max-[480px]:gap-[18px]">
            {/* Month */}
            <div className="w-[100px] max-[480px]:w-full">
              <select
                aria-label="Birth month"
                className="pointer-events-auto h-[50px] w-full cursor-pointer border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
              >
                <option value=""></option>
                {MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <span className="mt-[5px] block text-[12px] text-muted">MM</span>
            </div>

            {/* Day */}
            <div className="w-[100px] max-[480px]:w-full">
              <select
                aria-label="Birth day"
                className="pointer-events-auto h-[50px] w-full cursor-pointer border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
              >
                <option value=""></option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <span className="mt-[5px] block text-[12px] text-muted">DD</span>
            </div>

            {/* Year */}
            <div className="w-[100px] max-[480px]:w-full">
              <select
                aria-label="Birth year"
                className="pointer-events-auto h-[50px] w-full cursor-pointer border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
              >
                <option value=""></option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <span className="mt-[5px] block text-[12px] text-muted">YYYY</span>
            </div>
          </div>
        </div>

        {/* SSN */}
        <div className="mb-[18px]">
          <label className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark">SSN</label>
          <input
            type="text"
            aria-label="SSN"
            className="h-[50px] w-full border border-line bg-container px-5 text-[14px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
          />
        </div>
      </div>
    </div>
  )
}
