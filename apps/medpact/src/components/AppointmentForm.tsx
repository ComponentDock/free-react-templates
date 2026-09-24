import { useState, type FormEvent } from 'react'
import {
  appointmentTitle,
  appointmentDescription,
  departmentOptions,
  nameLabel,
  emailLabel,
  phoneLabel,
  departmentLabel,
  dateLabel,
  messageLabel,
  submitLabel,
  confirmationMessage,
} from '../data'

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {appointmentTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-muted">
          {appointmentDescription}
        </p>

        {submitted ? (
          <div
            role="status"
            className="mt-10 rounded-lg border border-accent/30 bg-accent/5 p-8 text-center"
          >
            <p className="text-lg font-medium text-accent">{confirmationMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="appt-name"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  {nameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="appt-name"
                  name="name"
                  type="text"
                  required
                  className="h-11 w-full rounded border border-gray-300 px-3 text-sm text-heading placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label
                  htmlFor="appt-email"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  {emailLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="appt-email"
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded border border-gray-300 px-3 text-sm text-heading placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label
                  htmlFor="appt-phone"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  {phoneLabel}
                </label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  className="h-11 w-full rounded border border-gray-300 px-3 text-sm text-heading placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label
                  htmlFor="appt-department"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  {departmentLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  id="appt-department"
                  name="department"
                  required
                  className="h-11 w-full rounded border border-gray-300 bg-white px-3 text-sm text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  {departmentOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="appt-date"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  {dateLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="appt-date"
                  name="date"
                  type="date"
                  required
                  className="h-11 w-full rounded border border-gray-300 px-3 text-sm text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="appt-message"
                className="mb-1.5 block text-sm font-medium text-heading"
              >
                {messageLabel}
              </label>
              <textarea
                id="appt-message"
                name="message"
                rows={4}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-heading placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex h-[50px] items-center rounded bg-brand px-10 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
