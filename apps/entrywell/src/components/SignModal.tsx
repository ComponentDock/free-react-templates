import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SignModalProps {
  isOpen: boolean
  onClose: () => void
}

type Tab = 'signin' | 'signup'

export function SignModal({ isOpen, onClose }: SignModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('signin')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Sign in or sign up"
    >
      <div
        className="relative flex w-full max-w-[900px] overflow-hidden rounded-none border-none bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left panel: background image */}
        <div
          className="hidden min-h-[500px] w-1/2 bg-cover bg-center md:block"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/entrywell/600/800)' }}
          aria-hidden="true"
        />

        {/* Right panel: form */}
        <div className="flex w-full flex-col bg-[#2b2b28] p-8 md:w-1/2">
          {/* Close button */}
          <button
            ref={closeRef}
            onClick={onClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded bg-black/10 text-white hover:bg-black/20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Tabs */}
          <div className="mb-6 flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('signin')}
              className={cn(
                'border-b-2 px-4 py-2 text-sm font-medium transition-colors',
                activeTab === 'signin'
                  ? 'border-[#e3b04b] text-[#e3b04b]'
                  : 'border-transparent text-white/10 hover:text-white/30',
              )}
              aria-selected={activeTab === 'signin'}
              role="tab"
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={cn(
                'border-b-2 px-4 py-2 text-sm font-medium transition-colors',
                activeTab === 'signup'
                  ? 'border-[#e3b04b] text-[#e3b04b]'
                  : 'border-transparent text-white/10 hover:text-white/30',
              )}
              aria-selected={activeTab === 'signup'}
              role="tab"
            >
              Sign Up
            </button>
          </div>

          {/* Sign In Form */}
          {activeTab === 'signin' && (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <h2 className="mb-2 text-xl font-bold text-white">Sign In</h2>

              <div>
                <label
                  htmlFor="signin-username"
                  className="mb-1 block text-[12px] uppercase tracking-[1px] text-white/60"
                >
                  Username
                </label>
                <input
                  id="signin-username"
                  type="text"
                  placeholder="Username"
                  className="w-full border-b border-white/10 bg-transparent py-2 text-[14px] text-white/70 placeholder:text-white/20 focus:border-[#e3b04b] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="signin-password"
                  className="mb-1 block text-[12px] uppercase tracking-[1px] text-white/60"
                >
                  Password
                </label>
                <input
                  id="signin-password"
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-white/10 bg-transparent py-2 text-[14px] text-white/70 placeholder:text-white/20 focus:border-[#e3b04b] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input id="remember-me" type="checkbox" className="h-4 w-4 accent-[#e3b04b]" />
                <label htmlFor="remember-me" className="text-sm text-white/60">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="h-[52px] w-full rounded bg-[#e3b04b] text-[14px] font-bold text-[#2b2b28] transition-colors hover:bg-transparent hover:text-[#e3b04b]"
              >
                Sign In
              </button>

              <a href="#" className="text-sm text-white/60 hover:text-[#e3b04b]">
                Forgot Password
              </a>

              <p className="text-sm text-white/60">
                Not a member?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('signup')}
                  className="text-[#e3b04b] hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === 'signup' && (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <h2 className="mb-2 text-xl font-bold text-white">Sign Up</h2>

              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-1 block text-[12px] uppercase tracking-[1px] text-white/60"
                >
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b border-white/10 bg-transparent py-2 text-[14px] text-white/70 placeholder:text-white/20 focus:border-[#e3b04b] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1 block text-[12px] uppercase tracking-[1px] text-white/60"
                >
                  Email Address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full border-b border-white/10 bg-transparent py-2 text-[14px] text-white/70 placeholder:text-white/20 focus:border-[#e3b04b] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-1 block text-[12px] uppercase tracking-[1px] text-white/60"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-white/10 bg-transparent py-2 text-[14px] text-white/70 placeholder:text-white/20 focus:border-[#e3b04b] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input id="agree-terms" type="checkbox" className="h-4 w-4 accent-[#e3b04b]" />
                <label htmlFor="agree-terms" className="text-sm text-white/60">
                  I agree all statements in terms of service
                </label>
              </div>

              <button
                type="submit"
                className="h-[52px] w-full rounded bg-[#e3b04b] text-[14px] font-bold text-[#2b2b28] transition-colors hover:bg-transparent hover:text-[#e3b04b]"
              >
                Sign Up
              </button>

              <p className="text-sm text-white/60">
                I&apos;m already a member!{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('signin')}
                  className="text-[#e3b04b] hover:underline"
                >
                  Sign In
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
