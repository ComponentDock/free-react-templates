export function Divider() {
  return (
    <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
      <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
      <span className="text-sm">or</span>
      <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
    </div>
  )
}
