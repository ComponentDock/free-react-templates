import { CloseButton } from './CloseButton'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'

export interface ModalCardProps {
  onClose?: () => void
}

export function ModalCard({ onClose }: ModalCardProps) {
  return (
    <div className="relative mx-4 w-full max-w-[800px] rounded-lg bg-card p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] sm:p-10">
      <div className="absolute right-3 top-3">
        <CloseButton onClick={onClose} />
      </div>
      <h2 className="mb-8 text-3xl font-bold text-heading">Contact Us</h2>
      <ContactForm />
      <Footer />
    </div>
  )
}
