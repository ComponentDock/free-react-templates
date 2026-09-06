interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">ModalShift</h1>
      <p className="mb-8 max-w-md text-center text-[#777] dark:text-gray-300">
        A login form popup with a clean design. Click the button below to see it in action.
      </p>
      <button
        onClick={onOpenModal}
        className="rounded bg-[#6c757d] px-5 py-3 font-medium text-white transition-colors hover:bg-[#5a6268] focus:outline-none focus:ring-2 focus:ring-[#6c757d] focus:ring-offset-2"
      >
        Launch modal
      </button>
    </section>
  )
}
