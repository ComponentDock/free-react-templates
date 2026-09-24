import { cn } from '@free-react-templates/ui'

interface SocialButtonProps {
  label: string
  href: string
  bgColor: string
  hoverColor: string
  children: React.ReactNode
}

function SocialButton({ label, href, bgColor, hoverColor, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'flex h-[52px] w-full items-center justify-center gap-3 rounded-full font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-white transition-colors duration-200',
      )}
      style={{ backgroundColor: bgColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor
      }}
    >
      {children}
      {label}
    </a>
  )
}

export function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-3">
      <SocialButton
        label="Login with Facebook"
        href="#"
        bgColor="var(--color-facebook)"
        hoverColor="var(--color-facebook-hover)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </SocialButton>

      <SocialButton
        label="Login with Twitter"
        href="#"
        bgColor="var(--color-twitter)"
        hoverColor="var(--color-twitter-hover)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      </SocialButton>
    </div>
  )
}
