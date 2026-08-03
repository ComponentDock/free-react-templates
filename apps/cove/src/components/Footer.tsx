import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">Cove</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A quiet cove for lost visitors — head back to shore.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
