import { cn } from '@free-react-templates/ui'

interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h3 className="mb-4 font-sans text-2xl font-bold text-gray-900">Postern</h3>
        <button
          type="button"
          onClick={onOpenModal}
          className={cn(
            'rounded-[4px] border-none bg-brand px-6 py-3 font-sans text-sm font-medium text-white',
            'hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
          )}
        >
          Launch Postern
        </button>
      </div>
    </section>
  )
}
