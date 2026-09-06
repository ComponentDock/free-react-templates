interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">ModalVault</h1>
      <p className="mb-8 max-w-md text-center text-gray-500 dark:text-gray-400">
        A clean password-protected modal for your next project.
      </p>
      <button
        onClick={onOpenModal}
        className="rounded bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Launch modal
      </button>
    </section>
  )
}
