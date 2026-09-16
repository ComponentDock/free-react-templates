import { ContactForm } from './ContactForm'
import { ContactImage } from './ContactImage'

export function ContactCard() {
  return (
    <div className="flex overflow-hidden rounded bg-white shadow-md">
      <div className="flex-1 p-8 md:p-10">
        <ContactForm />
      </div>
      <ContactImage />
    </div>
  )
}
