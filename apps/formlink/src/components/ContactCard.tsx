import { ContactForm } from './ContactForm'
import { InfoBoxes } from './InfoBoxes'

export function ContactCard() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[10px] shadow-[0px_21px_41px_-13px_var(--color-card-shadow)]">
      <div className="flex flex-col md:flex-row">
        {/* Left panel — form */}
        <div className="flex-1 bg-white px-8 py-10 md:px-10 md:py-12">
          <h3 className="mb-6 text-lg font-normal text-text-heading">Contact Us</h3>
          <ContactForm />
        </div>

        {/* Right panel — map placeholder */}
        <div
          className="min-h-[400px] bg-cover bg-center bg-no-repeat md:min-h-0 md:flex-1"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/formlinkmap/800/900)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Info boxes */}
      <div className="bg-white px-8 py-6">
        <InfoBoxes />
      </div>
    </div>
  )
}
