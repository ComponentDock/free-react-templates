export function SocialLogin() {
  const providers = [
    { name: 'Facebook', color: 'bg-facebook', icon: 'f' },
    { name: 'Twitter', color: 'bg-twitter', icon: '𝕏' },
    { name: 'Google', color: 'bg-google', icon: 'G' },
  ] as const

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">or sign in with</p>
      <div className="flex w-full flex-col gap-3">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={provider.name}
            className={`${provider.color} flex w-full items-center justify-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90`}
          >
            <span className="text-base font-bold">{provider.icon}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
