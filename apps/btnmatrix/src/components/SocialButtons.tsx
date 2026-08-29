type SocialRow = {
  brand: string
  colorClass: string
  icon: React.ReactNode
  label: string
  count?: string
}

function TwitterSvg() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  )
}

function FacebookSvg() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedinSvg() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PinterestSvg() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  )
}

function DribbbleSvg() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  )
}

const socialRows: SocialRow[] = [
  {
    brand: 'facebook',
    colorClass: 'btn-matrix-facebook',
    icon: <FacebookSvg />,
    label: 'Share',
    count: '8.2k',
  },
  {
    brand: 'twitter',
    colorClass: 'btn-matrix-twitter',
    icon: <TwitterSvg />,
    label: 'Connect with Twitter',
  },
  {
    brand: 'linkedin',
    colorClass: 'btn-matrix-linkedin',
    icon: <LinkedinSvg />,
    label: 'Connect with Linkedin',
  },
  {
    brand: 'pinterest',
    colorClass: 'btn-matrix-pinterest',
    icon: <PinterestSvg />,
    label: 'Pin it',
    count: '1k',
  },
  {
    brand: 'dribbble',
    colorClass: 'btn-matrix-dribbble',
    icon: <DribbbleSvg />,
    label: 'Find us on Dribbble',
  },
]

export function SocialButtons() {
  return (
    <section data-testid="social-buttons" className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-btnmatrix-heading">Social Buttons</h2>
      {socialRows.map((row) => (
        <div key={row.brand} className="mb-4 flex flex-wrap gap-2">
          {/* Icon only */}
          <button type="button" className={`btn-matrix ${row.colorClass}`}>
            {row.icon}
          </button>
          {/* Round icon only */}
          <button type="button" className={`btn-matrix btn-matrix-round ${row.colorClass}`}>
            {row.icon}
          </button>
          {/* Outline icon only */}
          <button
            type="button"
            className={`btn-matrix btn-matrix-outline-social ${row.colorClass}`}
          >
            {row.icon}
          </button>
          {/* Outline round icon only */}
          <button
            type="button"
            className={`btn-matrix btn-matrix-round btn-matrix-outline-social ${row.colorClass}`}
          >
            {row.icon}
          </button>
          {/* With label */}
          <button type="button" className={`btn-matrix ${row.colorClass}`}>
            {row.icon}
            <span>
              {row.label}
              {row.count ? ` - ${row.count}` : ''}
            </span>
          </button>
          {/* Outline with label */}
          <button
            type="button"
            className={`btn-matrix btn-matrix-outline-social ${row.colorClass}`}
          >
            {row.icon}
            <span>
              {row.label}
              {row.count ? ` - ${row.count}` : ''}
            </span>
          </button>
          {/* Link style with label */}
          <button type="button" className="btn-matrix btn-matrix-link">
            {row.icon}
            <span>
              {row.label}
              {row.count ? ` - ${row.count}` : ''}
            </span>
          </button>
        </div>
      ))}
    </section>
  )
}
