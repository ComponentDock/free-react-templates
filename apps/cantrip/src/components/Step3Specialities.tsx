import { useState } from 'react'

export function Step3Specialities() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="specialities" className="mb-1 block text-sm font-normal text-ink">
          Tell us your specialities
        </label>
        <textarea
          id="specialities"
          name="specialities"
          rows={6}
          placeholder="E.g. I'm very good at UI design...."
          className="w-full resize-none rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-md bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
        >
          Submit
        </button>
      </div>
      {submitted && (
        <p className="text-sm text-brand" role="status">
          Form submitted successfully!
        </p>
      )}
    </form>
  )
}
