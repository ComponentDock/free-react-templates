import { cn } from '@free-react-templates/ui'

interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h3 className="mb-4 font-sans text-2xl font-bold text-gray-900">Modal #9</h3>
        <button
          type="button"
          onClick={onOpenModal}
          className={cn(
            'rounded-[4px] border-none bg-gray-200 px-6 py-3 font-sans text-sm font-medium text-gray-700',
            'hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400',
          )}
        >
          Launch modal
        </button>
      </div>
    </section>
  )
}
