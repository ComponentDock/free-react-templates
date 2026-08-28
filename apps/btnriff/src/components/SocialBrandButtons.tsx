const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
  </svg>
)

const platforms = [
  {
    name: 'Twitter',
    Icon: TwitterIcon,
    solid: 'bg-twitter text-white',
    outline: 'border-twitter text-twitter',
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    solid: 'bg-facebook text-white',
    outline: 'border-facebook text-facebook',
  },
  {
    name: 'Dribbble',
    Icon: DribbbleIcon,
    solid: 'bg-dribbble text-white',
    outline: 'border-dribbble text-dribbble',
  },
]

function ColumnLabel({ label }: { label: string }) {
  return (
    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
      {label}
    </span>
  )
}

export function SocialBrandButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {/* Solid */}
      <div data-social-column="solid">
        <ColumnLabel label="Solid" />
        <div className="flex flex-col gap-2">
          {platforms.map((p) => (
            <button
              key={`solid-${p.name}`}
              type="button"
              className={`${p.solid} shadow-[3px_5px_0_0_rgba(0,0,0,0.15)] inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5`}
            >
              <p.Icon />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Outline */}
      <div data-social-column="outline">
        <ColumnLabel label="Outline" />
        <div className="flex flex-col gap-2">
          {platforms.map((p) => (
            <button
              key={`outline-${p.name}`}
              type="button"
              className={`${p.outline} border bg-white shadow-[3px_5px_0_0_rgba(0,0,0,0.1)] inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5`}
            >
              <p.Icon />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Rounded Solid */}
      <div data-social-column="rounded-solid">
        <ColumnLabel label="Rounded Solid" />
        <div className="flex flex-col gap-2">
          {platforms.map((p) => (
            <button
              key={`rsolid-${p.name}`}
              type="button"
              className={`${p.solid} shadow-[3px_5px_0_0_rgba(0,0,0,0.15)] inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5`}
            >
              <p.Icon />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Rounded Outline */}
      <div data-social-column="rounded-outline">
        <ColumnLabel label="Rounded Outline" />
        <div className="flex flex-col gap-2">
          {platforms.map((p) => (
            <button
              key={`routline-${p.name}`}
              type="button"
              className={`${p.outline} border bg-white shadow-[3px_5px_0_0_rgba(0,0,0,0.1)] inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5`}
            >
              <p.Icon />
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
