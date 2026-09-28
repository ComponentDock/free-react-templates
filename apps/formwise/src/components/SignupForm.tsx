import { User, Mail, Lock } from 'lucide-react'

interface SignupFormProps {
  /** Whether to show the illustration on the left instead of the right */
  illustrationLeft?: boolean
}

export function SignupForm({ illustrationLeft = false }: SignupFormProps) {
  return (
    <div className="mx-auto my-6 w-full max-w-[900px] overflow-hidden rounded-lg bg-card shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
      <div className={`flex flex-col ${illustrationLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Form side */}
        <div className="flex w-full flex-col justify-center px-8 py-10 md:w-1/2 md:px-10">
          <h2 className="mb-8 text-[28px] font-bold leading-tight text-heading">Sign up</h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {/* Name */}
            <div className="border-b border-border">
              <div className="flex items-center gap-3">
                <User size={18} className="shrink-0 text-muted" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent py-2 text-sm text-heading placeholder-muted outline-none"
                  aria-label="Your Name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="border-b border-border">
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-muted" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent py-2 text-sm text-heading placeholder-muted outline-none"
                  aria-label="Your Email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="border-b border-border">
              <div className="flex items-center gap-3">
                <Lock size={18} className="shrink-0 text-muted" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent py-2 text-sm text-heading placeholder-muted outline-none"
                  aria-label="Password"
                />
              </div>
            </div>

            {/* Repeat password */}
            <div className="border-b border-border">
              <div className="flex items-center gap-3">
                <Lock size={18} className="shrink-0 text-muted" />
                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="w-full bg-transparent py-2 text-sm text-heading placeholder-muted outline-none"
                  aria-label="Repeat your password"
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-2 text-sm text-body">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                aria-label="I agree all statements in Terms of service"
              />
              <span>
                I agree all statements in{' '}
                <a
                  href="#terms"
                  className="font-medium underline underline-offset-2 hover:text-brand"
                >
                  Terms of service
                </a>
              </span>
            </label>

            {/* Register button */}
            <button
              type="submit"
              className="mt-2 cursor-pointer rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Register
            </button>
          </form>

          {/* Already a member link */}
          <p className="mt-6 text-right text-sm text-body">
            <a href="#login" className="font-medium underline underline-offset-2 hover:text-brand">
              I am already member
            </a>
          </p>
        </div>

        {/* Illustration side */}
        <div className="hidden items-center justify-center bg-[#f9f7f4] px-8 py-10 md:flex md:w-1/2">
          {illustrationLeft ? <WorkspaceIllustrationB /> : <WorkspaceIllustrationA />}
        </div>
      </div>
    </div>
  )
}

function WorkspaceIllustrationA() {
  return (
    <svg
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[320px]"
      aria-hidden="true"
    >
      {/* Desk */}
      <rect x="60" y="200" width="280" height="12" rx="3" fill="#d4a574" />
      <rect x="80" y="212" width="8" height="80" rx="2" fill="#c49660" />
      <rect x="312" y="212" width="8" height="80" rx="2" fill="#c49660" />

      {/* Monitor */}
      <rect x="130" y="110" width="140" height="90" rx="6" fill="#333" />
      <rect x="136" y="116" width="128" height="72" rx="3" fill="#5b8fb9" />
      <rect x="185" y="200" width="30" height="8" rx="2" fill="#555" />
      <rect x="170" y="206" width="60" height="4" rx="2" fill="#444" />

      {/* Screen content - lines */}
      <rect x="148" y="130" width="60" height="4" rx="1" fill="#fff" opacity="0.6" />
      <rect x="148" y="140" width="80" height="4" rx="1" fill="#fff" opacity="0.4" />
      <rect x="148" y="150" width="50" height="4" rx="1" fill="#fff" opacity="0.5" />
      <rect x="148" y="160" width="70" height="4" rx="1" fill="#fff" opacity="0.3" />
      <rect x="148" y="170" width="40" height="4" rx="1" fill="#fff" opacity="0.4" />

      {/* Chair */}
      <rect x="170" y="260" width="60" height="8" rx="4" fill="#e8a87c" />
      <rect x="195" y="240" width="10" height="20" rx="2" fill="#c49660" />
      <rect x="160" y="210" width="80" height="35" rx="8" fill="#e8a87c" />

      {/* Plant */}
      <rect x="50" y="170" width="20" height="30" rx="4" fill="#8fae8b" />
      <circle cx="60" cy="160" r="18" fill="#6b9b6b" />
      <circle cx="50" cy="155" r="12" fill="#7daf7d" />
      <circle cx="70" cy="152" r="14" fill="#5d945d" />

      {/* Coffee cup */}
      <rect x="310" y="185" width="18" height="15" rx="3" fill="#fff" />
      <path
        d="M328 188 Q336 188 336 195 Q336 200 328 200"
        stroke="#ccc"
        strokeWidth="2"
        fill="none"
      />

      {/* Keyboard */}
      <rect x="155" y="200" width="50" height="3" rx="1" fill="#ddd" />

      {/* Small items on desk */}
      <circle cx="100" cy="195" r="5" fill="#e67e7e" />
      <rect x="310" y="175" width="14" height="6" rx="2" fill="#f0d060" />
    </svg>
  )
}

function WorkspaceIllustrationB() {
  return (
    <svg
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[320px]"
      aria-hidden="true"
    >
      {/* Person figure */}
      <circle cx="180" cy="100" r="30" fill="#f0c8a0" />
      <path d="M150 130 Q150 180 180 200 Q210 180 210 130 Z" fill="#4a90c4" />
      {/* Hair */}
      <path
        d="M155 95 Q155 65 180 65 Q205 65 205 95 Q200 80 180 80 Q160 80 155 95 Z"
        fill="#5a3825"
      />

      {/* Flower pot */}
      <rect x="250" y="200" width="40" height="50" rx="6" fill="#d4764e" />
      <rect x="244" y="195" width="52" height="10" rx="3" fill="#c46640" />

      {/* Flowers */}
      <circle cx="260" cy="175" r="10" fill="#e88ca5" />
      <circle cx="275" cy="165" r="12" fill="#f4a0b5" />
      <circle cx="285" cy="178" r="9" fill="#e07a95" />
      <circle cx="270" cy="155" r="8" fill="#f0b0c0" />

      {/* Stems */}
      <line x1="265" y1="185" x2="265" y2="200" stroke="#6b9b6b" strokeWidth="3" />
      <line x1="275" y1="175" x2="275" y2="200" stroke="#6b9b6b" strokeWidth="3" />
      <line x1="285" y1="185" x2="280" y2="200" stroke="#6b9b6b" strokeWidth="3" />

      {/* Leaves */}
      <ellipse cx="255" cy="190" rx="8" ry="4" fill="#7daf7d" transform="rotate(-30 255 190)" />
      <ellipse cx="290" cy="190" rx="8" ry="4" fill="#7daf7d" transform="rotate(30 290 190)" />

      {/* Table surface hint */}
      <rect x="140" y="250" width="180" height="8" rx="3" fill="#d4a574" />
      <rect x="160" y="258" width="6" height="40" rx="2" fill="#c49660" />
      <rect x="294" y="258" width="6" height="40" rx="2" fill="#c49660" />
    </svg>
  )
}
