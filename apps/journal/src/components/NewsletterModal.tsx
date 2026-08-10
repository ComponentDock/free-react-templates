import { X } from 'lucide-react'
import { newsletterModalCloseLabel, newsletterModalText, newsletterModalTitle } from '../data'
import { NewsletterForm } from './NewsletterForm'

interface NewsletterModalProps {
  onClose: () => void
}

/** Newsletter modal opened by the nav Subscribe button: title, blurb, email
 *  form, and a red close button (recreates the original's bootstrap modal). */
export function NewsletterModal({ onClose }: NewsletterModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={newsletterModalTitle}
      className="fixed inset-0 z-[2999] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg bg-white p-[70px] text-center">
        <button
          type="button"
          onClick={onClose}
          aria-label={newsletterModalCloseLabel}
          className="absolute top-0 right-0 flex h-[30px] w-[30px] items-center justify-center bg-red-600 text-white transition-colors hover:bg-red-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <h2 className="text-2xl font-bold text-ink">{newsletterModalTitle}</h2>
        <p className="mt-3 text-sm text-body">{newsletterModalText}</p>
        <div className="mt-8 text-left">
          <NewsletterForm variant="modal" />
        </div>
      </div>
    </div>
  )
}
