import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data'
import { SectionTitle } from './SectionTitle'
import { hasErrors, validateContact, type ContactErrors, type ContactValues } from '../lib/contact'

const initialValues: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

const infoColumns = [
  { label: 'Address', value: contactInfo.address, Icon: MapPin },
  { label: 'Phone', value: contactInfo.phone, Icon: Phone },
  { label: 'Email', value: contactInfo.email, Icon: Mail },
]

const fieldClass =
  'w-full rounded-full border border-gray-300 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-gray-400 focus:border-brand'

/** Contact section (`.site-section.bg-light`): 3 centered info columns with
 *  blue icons + a white form card (First/Last Name, Email, Subject, Message)
 *  with inline validation and a blue pill Send Message button. */
export function ContactSection() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  const handleChange =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (!hasErrors(nextErrors)) {
      setSent(true)
    }
  }

  return (
    <section id="contact-section" className="bg-soft py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="mx-auto max-w-2xl text-center font-light text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {infoColumns.map(({ label, value, Icon }) => (
            <div key={label}>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
              </span>
              <h3 className="mt-4 font-bold text-heading">{label}</h3>
              <p className="mt-2 text-sm text-gray-500">{value}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-white p-5 shadow-sm md:p-8">
          <h3 className="text-xl font-bold text-heading">Contact Form</h3>
          {sent ? (
            <p role="status" className="mt-6 text-gray-600">
              Thanks for your message — we will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="unison-first-name" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="unison-first-name"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    className={fieldClass}
                  />
                  {errors.firstName && (
                    <p role="alert" className="mt-2 text-sm text-brand">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="unison-last-name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="unison-last-name"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    className={fieldClass}
                  />
                  {errors.lastName && (
                    <p role="alert" className="mt-2 text-sm text-brand">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="unison-email" className="sr-only">
                  Email
                </label>
                <input
                  id="unison-email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange('email')}
                  className={fieldClass}
                />
                {errors.email && (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="unison-subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="unison-subject"
                  type="text"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange('subject')}
                  className={fieldClass}
                />
                {errors.subject && (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="unison-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="unison-message"
                  rows={5}
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange('message')}
                  className={fieldClass}
                />
                {errors.message && (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="mt-6 rounded-full px-[30px] py-[10px] text-base"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
