import { type ChangeEvent, type FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { FIELD_CLASS, PILL_ARROW, PILL_BASE, PILL_PRIMARY } from '../lib/buttonStyles'

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'Enter email address' },
] as const

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/* White split section closing the page: map panel left, sharp-cornered
   enquiry form right, closed by the gradient pill. */
export function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  return (
    <section id="contact" className="bg-white">
      <div className="grid items-center lg:grid-cols-12">
        <div className="relative h-[545px] lg:col-span-6">
          <img
            src="https://picsum.photos/seed/wanderport-map/1200/1090"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="map-wash absolute inset-0" aria-hidden="true" />
        </div>

        <div className="px-4 py-[100px] lg:col-span-5 lg:col-start-8">
          <form aria-label="Send us a message" noValidate onSubmit={handleSubmit}>
            {FIELDS.map((field) => (
              <div key={field.name}>
                <label className="sr-only" htmlFor={`contact-${field.name}`}>
                  {field.label}
                </label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
                  className={cn(FIELD_CLASS, 'h-[48px] px-[25px]')}
                />
              </div>
            ))}

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              className={cn(FIELD_CLASS, 'h-[150px] resize-none px-[25px] py-[15px]')}
            />

            <Button type="submit" className={cn(PILL_BASE, PILL_PRIMARY, 'mt-[20px]')}>
              Send Message
              <ArrowRight className={PILL_ARROW} aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
