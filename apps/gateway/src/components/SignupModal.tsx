import { useEffect, useState, type FormEvent } from 'react'
import { Beer, Bike, Check, X } from 'lucide-react'

interface SignupModalProps {
  onClose: () => void
}

const underlineInputClass =
  'h-[30px] w-full rounded-none border-0 border-b border-white/10 bg-transparent p-0 text-[14px] text-white/70 placeholder:text-white/20 focus:border-white/30 focus:outline-none focus:ring-0'

const labelClass = 'mb-1 block text-[12px] uppercase tracking-widest text-white/80'

export function SignupModal({ onClose }: SignupModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Create your account"
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative grid w-full max-w-[900px] grid-cols-1 overflow-hidden rounded-none bg-white shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)] md:grid-cols-2"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-0 top-0 z-[1] flex h-10 w-10 cursor-pointer items-center justify-center bg-black/10 text-white transition-colors hover:bg-black/20"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        {/* Left teal panel */}
        <div className="flex items-center bg-brand px-5 py-5 pb-5 text-center text-[14px] text-white/80 md:py-14">
          <div className="relative w-full">
            <Beer
              aria-hidden="true"
              className="absolute -top-1 left-0 h-[30px] w-[30px] text-white/80"
            />
            <p className="text-[14px] font-normal leading-relaxed text-white/80">
              Plan your activities and control your progress online.
            </p>
            <Bike
              aria-hidden="true"
              className="mx-auto mt-6 h-[10vw] w-[10vw] max-w-[100px] text-white md:h-[100px] md:w-[100px]"
            />
          </div>
        </div>

        {/* Right navy panel */}
        <div className="bg-navy px-5 py-5 text-[14px] text-white/80 md:py-10">
          <div className="w-full">
            {submitted ? (
              <div role="status" className="py-10 text-center">
                <p className="text-lg text-white">Check your inbox</p>
                <p className="mt-2 text-white/60">Your account is on its way.</p>
              </div>
            ) : (
              <>
                <h2 className="mb-4 text-lg font-normal leading-relaxed text-white/80">
                  Create Your Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div className="mb-3">
                    <label htmlFor="gw-name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="gw-name"
                      type="text"
                      placeholder="John Doe"
                      className={underlineInputClass}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gw-email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="gw-email"
                      type="text"
                      placeholder="johndoe@gmail.com"
                      className={underlineInputClass}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gw-password" className={labelClass}>
                      Password
                    </label>
                    <input
                      id="gw-password"
                      type="password"
                      placeholder="Password"
                      className={underlineInputClass}
                    />
                  </div>

                  <div className="mb-3 flex">
                    <div className="w-full text-left">
                      <label className="flex cursor-pointer items-start gap-2">
                        <span className="relative inline-block h-4 w-4">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(event) => setAgreed(event.target.checked)}
                            className="peer sr-only"
                          />
                          <span className="absolute left-0 top-[5px] flex h-4 w-4 items-center justify-center rounded-[3px] border border-white/40 bg-transparent peer-checked:border-mint peer-checked:bg-mint">
                            {agreed && <Check aria-hidden="true" className="h-3 w-3 text-white" />}
                          </span>
                        </span>
                        <span className="text-[14px] text-white/30">I agree all statements</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      type="submit"
                      className="h-[52px] w-full cursor-pointer rounded-[4px] border border-brand bg-brand px-3 text-[14px] text-white transition-colors hover:bg-transparent hover:text-brand"
                    >
                      Sign Up
                    </button>
                  </div>

                  <a href="#" className="text-[14px] text-brand underline">
                    I&apos;m already a member
                  </a>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
