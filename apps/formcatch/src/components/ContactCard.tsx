import { ContactForm } from './ContactForm'

export function ContactCard() {
  return (
    <div className="flex overflow-hidden rounded bg-white shadow-md">
      <div className="flex-1 p-8 md:p-10">
        <ContactForm />
      </div>
      <div className="hidden w-1/2 md:block">
        <img
          src="https://picsum.photos/seed/formcatch/800/600"
          alt="Contact"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
