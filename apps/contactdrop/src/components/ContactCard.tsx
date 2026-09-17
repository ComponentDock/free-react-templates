import { ContactForm } from './ContactForm'

interface ContactCardProps {
  onClose: () => void
}

export function ContactCard({ onClose }: ContactCardProps) {
  return (
    <div
      id="contact"
      className="relative w-full max-w-[480px] overflow-hidden rounded-lg bg-card shadow-2xl"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close contact form"
        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Header banner */}
      <div className="relative h-32 w-full overflow-hidden sm:h-36">
        <img
          src="https://picsum.photos/seed/contactdrop-banner/960/288"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-bold uppercase tracking-wider text-white">
          Contact Us
        </h1>
      </div>

      {/* Form */}
      <div className="p-6 sm:p-8">
        <ContactForm />
      </div>
    </div>
  )
}
