interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">Modalize</h1>
      <p className="mb-8 max-w-md text-center text-gray-600 dark:text-gray-300">
        A clean login/registration modal for your next project.
      </p>
      <button
        onClick={onOpenModal}
        className="rounded bg-[#007bff] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0069d9] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
      >
        Launch Modal
      </button>
    </section>
  )
}
