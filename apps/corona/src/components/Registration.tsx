import { useState } from 'react'

/* Registration (source: .registration-area — violet band with "Courses for
   Free" and a glassy centered form panel: Name / Phone Number / Email
   Address underline inputs + gradient Submit button, purple glow shadow). */
export function Registration() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-[linear-gradient(120deg,#7c32ff_0%,#c738d8_100%)]">
      <div className="mx-auto max-w-[1140px] px-[15px] py-[100px] text-center">
        <h2 className="font-display text-[42px] font-black text-white">Courses for Free</h2>
        <p className="mt-4 text-[14px] text-white/90">It is high time for learning</p>

        <form
          className="mx-auto mt-[50px] max-w-[540px] bg-white/10 px-[35px] py-[70px] shadow-[0_0_50px_rgba(185,55,223,0.45)] backdrop-blur-sm"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
          aria-label="Free course registration"
        >
          <div className="space-y-2 text-left">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              className="w-full border-0 border-b border-muted bg-transparent px-0 py-5 text-[13px] text-white outline-none placeholder:text-white/70"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="w-full border-0 border-b border-muted bg-transparent px-0 py-5 text-[13px] text-white outline-none placeholder:text-white/70"
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full border-0 border-b border-muted bg-transparent px-0 py-5 text-[13px] text-white outline-none placeholder:text-white/70"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-[linear-gradient(90deg,#7c32ff_0%,#c738d8_100%)] py-4 text-[14px] font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Submit
          </button>
          {submitted && (
            <p className="mt-6 text-[13px] text-white/90" role="status">
              Thanks! We&apos;ll email you the free course details.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
