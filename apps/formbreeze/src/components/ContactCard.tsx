import { ContactForm } from './ContactForm'
import { ContactIllustration } from './ContactIllustration'

export function ContactCard() {
  return (
    <div className="flex w-full max-w-[1163px] flex-wrap items-center overflow-hidden rounded-[10px] bg-bg-card px-8 py-12 md:px-[90px] md:py-[90px]">
      <div className="mb-8 w-full md:mb-0 md:block md:w-[296px] md:pr-8">
        <ContactIllustration />
      </div>
      <div className="w-full md:w-[390px]">
        <ContactForm />
      </div>
    </div>
  )
}
