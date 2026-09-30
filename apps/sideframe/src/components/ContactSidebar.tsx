import { cn } from '@free-react-templates/ui'

interface ContactSidebarProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function ContactSidebar({ isOpen, onClose, className }: ContactSidebarProps) {
  if (!isOpen) return null

  return (
    <aside
      className={cn(
        'fixed right-0 top-0 z-40 flex h-full w-[350px] flex-col bg-brand p-8 text-white shadow-xl transition-transform',
        'max-sm:w-full',
        className,
      )}
      aria-label="Contact sidebar"
    >
      <button
        type="button"
        onClick={onClose}
        className="mb-6 inline-flex h-8 w-8 items-center justify-center self-end rounded text-white/70 transition-colors hover:text-white"
        aria-label="Close contact sidebar"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="mb-6 text-3xl font-bold">Get in touch</h2>

      <form className="flex flex-1 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <textarea
          placeholder="Write your message"
          rows={5}
          className="resize-none rounded border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <button
          type="submit"
          className="mt-2 w-full rounded bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:bg-white/90"
        >
          Send
        </button>
      </form>
    </aside>
  )
}
