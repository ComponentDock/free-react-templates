export function MobileCta() {
  return (
    <div
      role="group"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-800 bg-gray-900 p-3 lg:hidden"
      aria-label="Quick actions"
    >
      <div className="flex gap-3">
        <a
          href="#newsletter"
          className="flex-1 rounded-xl bg-gray-800 px-4 py-3 text-center text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
        >
          Subscribe
        </a>
        <a
          href="#episodes"
          className="flex-1 rounded-xl bg-primary-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-500"
        >
          Listen Now
        </a>
      </div>
    </div>
  )
}
