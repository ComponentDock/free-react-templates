import { type FormEvent, useState } from 'react'

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [mealPreference, setMealPreference] = useState('vegetarian')
  const [paymentMode, setPaymentMode] = useState('cash')
  const [donation, setDonation] = useState(500)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    setMealPreference('vegetarian')
    setPaymentMode('cash')
    setDonation(500)
  }

  return (
    <section className="w-full p-8 md:w-1/2 md:p-10">
      {submitted ? (
        <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
          <p className="rounded bg-brand/10 p-6 text-center text-sm text-green-700 dark:text-green-400">
            Registration submitted successfully!
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Register Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Two-column form grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
            {/* Left column */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  required
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  required
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label
                    htmlFor="meal-preference"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                  >
                    Meal Preference
                  </label>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Lunch detail</span>
                </div>
                <select
                  id="meal-preference"
                  name="mealPreference"
                  value={mealPreference}
                  onChange={(e) => setMealPreference(e.target.value)}
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                >
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                </select>
              </div>

              <div>
                <fieldset>
                  <div className="mb-2 flex items-center justify-between">
                    <legend className="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                      Payment Mode
                    </legend>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Payment Detail</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="paymentMode"
                        value="cash"
                        checked={paymentMode === 'cash'}
                        onChange={() => setPaymentMode('cash')}
                        className="accent-brand"
                      />
                      Cash
                    </label>
                    <label className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="paymentMode"
                        value="cheque"
                        checked={paymentMode === 'cheque'}
                        onChange={() => setPaymentMode('cheque')}
                        className="accent-brand"
                      />
                      Cheque
                    </label>
                    <label className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="paymentMode"
                        value="demand-draft"
                        checked={paymentMode === 'demand-draft'}
                        onChange={() => setPaymentMode('demand-draft')}
                        className="accent-brand"
                      />
                      Demand Draft
                    </label>
                  </div>
                </fieldset>
              </div>

              <div>
                <label
                  htmlFor="dd-cheque-no"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  DD / Cheque No.
                </label>
                <input
                  id="dd-cheque-no"
                  name="ddChequeNo"
                  type="text"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="drawn-on"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Drawn On ( Bank Name)
                </label>
                <input
                  id="drawn-on"
                  name="drawnOn"
                  type="text"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="payable-at"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
                >
                  Payable At
                </label>
                <input
                  id="payable-at"
                  name="payableAt"
                  type="text"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Donation section */}
          <div className="pt-2">
            <label
              htmlFor="donation"
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300"
            >
              Donate Us
            </label>
            <div className="flex items-center gap-3">
              <input
                id="donation"
                name="donation"
                type="range"
                min={0}
                max={1000}
                step={50}
                value={donation}
                onChange={(e) => setDonation(Number(e.target.value))}
                className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand dark:bg-gray-700"
              />
              <span className="whitespace-nowrap rounded bg-brand px-3 py-1 text-sm font-semibold text-white">
                $ {donation}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="rounded border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
