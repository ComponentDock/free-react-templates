import { FormEvent } from 'react'
import { X } from 'lucide-react'

interface ConsultationModalProps {
  open: boolean
  onClose: () => void
}

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ConsultationModal({ open, onClose }: ConsultationModalProps) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      data-backdrop="true"
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative mx-4 flex w-full max-w-[950px] flex-col overflow-hidden shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] md:flex-row"
        style={{ borderRadius: 0 }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-white transition-colors hover:bg-black/20"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left panel: background image */}
        <div
          className="hidden min-h-[300px] w-1/2 bg-cover bg-center md:block"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/consultation/600/600)',
          }}
        />
        <div
          className="block h-[300px] w-full bg-cover bg-center md:hidden"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/consultation/600/400)',
          }}
        />

        {/* Right panel: consultation form */}
        <div className="w-full bg-olive p-8 text-white md:w-1/2">
          <p className="mb-1 text-sm font-bold uppercase tracking-wider text-white/80">
            Booking an Appointment
          </p>
          <h2 id="consultation-title" className="mb-6 text-3xl font-bold text-white">
            Free Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              className="w-full rounded-none border-0 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="w-full rounded-none border-0 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              className="w-full rounded-none border-0 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <textarea
              placeholder="Message"
              aria-label="Message"
              rows={4}
              className="w-full resize-none rounded-none border-0 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-full bg-charcoal px-6 text-base font-medium text-white transition-colors hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-olive"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
