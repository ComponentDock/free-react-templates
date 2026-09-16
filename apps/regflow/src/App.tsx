import { type FormEvent, useEffect, useState } from 'react'
import { FormWrapper } from './components/FormWrapper'
import { FormField } from './components/FormField'
import { SubmitButton } from './components/SubmitButton'
import { Footer } from './components/Footer'

export function App() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Regflow — Registration Form Template'
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <FormWrapper>
        <div className="rounded-sm border-[10px] border-[var(--color-card-border)] bg-[var(--color-card)] px-[99px] py-[77px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] max-md:border-0 max-md:px-6 max-md:py-10">
          {submitted ? (
            <div className="text-center">
              <h3 className="mb-4 text-3xl font-bold uppercase max-md:text-[28px]">Thank You</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Your message has been received. We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-center">
              <h3 className="mb-4 text-[45px] font-bold uppercase max-md:text-[28px]">
                Contact Us
              </h3>
              <p className="mb-8 text-sm leading-relaxed opacity-80">
                We love hearing from you. Fill out the form below and we will get back to you as
                soon as possible.
              </p>

              <FormField label="Your Name" name="name" required />
              <FormField label="Your Mail" name="email" type="email" required />
              <FormField label="Your Message" name="message" type="textarea" required />

              <SubmitButton />
            </form>
          )}
        </div>
      </FormWrapper>
      <Footer />
    </div>
  )
}
