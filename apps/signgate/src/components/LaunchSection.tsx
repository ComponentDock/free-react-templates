import { forwardRef } from 'react'

interface LaunchSectionProps {
  onOpen: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export const LaunchSection = forwardRef<HTMLButtonElement, LaunchSectionProps>(
  function LaunchSection({ onOpen, triggerRef }, _ref) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-4"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <h1 className="text-5xl font-light" style={{ color: '#000' }}>
          Signgate
        </h1>
        <button
          ref={triggerRef}
          onClick={onOpen}
          className="rounded border border-gray-300 bg-white px-8 py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-gray-50"
          style={{ color: '#b3b3b3' }}
        >
          Launch modal
        </button>
      </div>
    )
  },
)
