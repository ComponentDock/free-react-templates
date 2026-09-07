export function Step1BasicInfo() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="first-name" className="mb-1 block text-sm font-normal text-ink">
            First name
          </label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            placeholder="E.g. Nguyen"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="last-name" className="mb-1 block text-sm font-normal text-ink">
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            placeholder="E.g. Kardashian"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-normal text-ink">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                className="accent-brand"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="gender" value="female" className="accent-brand" />
              <span>Female</span>
            </label>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="birth-month" className="mb-1 block text-sm font-normal text-ink">
            Date of birth
          </label>
          <div className="flex gap-2">
            <select
              id="birth-month"
              name="birth_month"
              className="flex-1 rounded-[5px] border border-transparent bg-surface px-3 py-3 text-sm text-ink focus:border-focus focus:outline-none"
            >
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              id="birth-day"
              name="birth_day"
              className="w-20 rounded-[5px] border border-transparent bg-surface px-3 py-3 text-sm text-ink focus:border-focus focus:outline-none"
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              id="birth-year"
              name="birth_year"
              className="w-24 rounded-[5px] border border-transparent bg-surface px-3 py-3 text-sm text-ink focus:border-focus focus:outline-none"
            >
              <option value="">Year</option>
              {Array.from({ length: 30 }, (_, i) => 2010 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="nationality" className="mb-1 block text-sm font-normal text-ink">
          Nationality
        </label>
        <select
          id="nationality"
          name="nationality"
          className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink focus:border-focus focus:outline-none"
        >
          <option value="">Select nationality</option>
          <option value="vn">Viet Nam</option>
          <option value="us">USA</option>
          <option value="uk">United Kingdom</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
  )
}
