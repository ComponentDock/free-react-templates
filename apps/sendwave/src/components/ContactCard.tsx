import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'
import { SocialLinks } from './SocialLinks'

export function ContactCard() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[10px] shadow-[0px_21px_41px_-13px_rgba(0,0,0,0.18)]">
      <div className="flex flex-col md:flex-row">
        {/* Left panel — form and info */}
        <div className="flex-1 bg-white px-8 py-10 md:px-10 md:py-12">
          <h3 className="mb-2 text-lg font-normal text-text-heading">Contact us</h3>
          <p className="mb-6 text-sm text-text-body">
            We&apos;re open for any suggestion or just to have a chat
          </p>

          <ContactInfo />

          <ContactForm />

          <SocialLinks />
        </div>

        {/* Right panel — background image */}
        <div
          className="min-h-[400px] bg-cover bg-center bg-no-repeat md:min-h-0 md:flex-1"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/contact05office/800/900)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
