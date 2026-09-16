import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export function ContactCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded bg-white shadow-md md:flex-row">
      <div className="flex-1 bg-brand-purple p-8 md:p-10">
        <ContactForm />
      </div>
      <div className="flex-1 p-8 md:p-10">
        <ContactInfo />
      </div>
    </div>
  )
}
