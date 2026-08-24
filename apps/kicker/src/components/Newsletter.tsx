import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-light-bg px-4 py-[70px] lg:px-[88px]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-chivo text-[36px] font-bold text-ink lg:text-[44px]">
          Subscribe to the newsletter
        </h2>
        <p className="mt-4 font-chivo text-[16px] text-ink">
          Get a weekly digest of our most important stories direct to your inbox.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <p className="font-chivo text-[18px] font-bold text-brand-red">
              Thank you for subscribing!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your mail"
              className="h-[60px] w-full max-w-[400px] border-0 border-b-2 border-ink bg-transparent px-[33px] py-2 font-chivo text-[16px] text-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-red sm:w-auto"
            />
            <button
              type="submit"
              className="h-[50px] rounded-[5px] bg-brand-red px-[31px] font-chivo text-[18px] font-bold text-white transition-colors hover:bg-red-800"
            >
              Send Now
            </button>
          </form>
        )}

        <p className="mt-4 font-chivo text-[14px] text-gray-500">
          Place some disclaimer text here about how subscriber's email, Privacy Policy and all that.
        </p>
      </div>
    </section>
  )
}
