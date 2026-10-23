import { useState, type FormEvent } from 'react'

const initialValues = { name: '', email: '', companySize: '1', message: '' }

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmittedName(values.name)
    setValues(initialValues)
  }

  return (
    <section id="contact" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Fill out the form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-14 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-ink dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={values.name}
                onChange={handleChange}
                className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-ink focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-ink dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={handleChange}
                className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-ink focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="contact-company-size"
              className="block text-sm font-medium text-ink dark:text-gray-300"
            >
              Company size
            </label>
            <select
              id="contact-company-size"
              name="companySize"
              value={values.companySize}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-ink focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </div>

          <div className="mt-6">
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-ink dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-8 h-12 rounded-full bg-primary-500 px-10 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Send message
          </button>

          {submittedName !== null && (
            <p role="status" className="mt-6 text-sm font-medium text-primary-600">
              Thanks, {submittedName} — we will be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
