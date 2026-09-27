import { type FormEvent, useState } from 'react'

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-brand px-4 py-12 dark:bg-gray-900">
      <div className="w-full max-w-[460px] overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
        {/* Card header image — grayscale cityscape */}
        <div className="h-[200px] w-full overflow-hidden">
          <img
            src="https://picsum.photos/seed/regcraft-city/600/300"
            alt="City skyline"
            className="h-full w-full object-cover grayscale"
          />
        </div>

        {/* Card body */}
        <div className="px-8 py-8">
          <h1 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            Registration Info
          </h1>

          {submitted ? (
            <p className="rounded bg-accent/10 p-4 text-center text-sm text-green-700 dark:text-green-400">
              Registration submitted successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:focus:border-accent"
                />
              </div>

              {/* Birthdate + Gender row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="birthdate"
                    className="mb-1 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
                  >
                    Birthdate
                  </label>
                  <input
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    className="w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="mb-1 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:focus:border-accent"
                  >
                    <option value="">Select…</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Class */}
              <div>
                <label
                  htmlFor="class"
                  className="mb-1 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Class
                </label>
                <select
                  id="class"
                  name="class"
                  className="w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:focus:border-accent"
                >
                  <option value="">Select…</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Registration Code */}
              <div>
                <label
                  htmlFor="reg-code"
                  className="mb-1 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
                >
                  Registration Code
                </label>
                <input
                  id="reg-code"
                  name="regCode"
                  type="text"
                  className="w-full border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:focus:border-accent"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-500 dark:hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
