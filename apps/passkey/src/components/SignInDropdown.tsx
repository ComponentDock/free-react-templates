import { useState, useEffect, useRef, useCallback } from 'react'

export function SignInDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuId = 'signin-menu'

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, close])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      close()
    },
    [close],
  )

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="inline-flex cursor-pointer items-center rounded-[5px] bg-[#fa697c] px-4 py-3 text-[14px] font-normal text-white shadow-[0px_10px_20px_-6px_rgba(0,0,0,.12)] hover:bg-[#f83851] focus:outline-none"
      >
        Sign In
        <span
          className="ml-1 inline-block"
          style={{
            width: 0,
            height: 0,
            borderTop: '0.3em solid',
            borderLeft: '0.3em solid transparent',
            borderRight: '0.3em solid transparent',
          }}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <form
          id={menuId}
          role="menu"
          onSubmit={handleSubmit}
          className="absolute right-0 z-50 mt-5 min-w-[320px] rounded-md bg-white p-6 shadow-[0_10px_34px_-20px_rgba(0,0,0,.41)]"
        >
          {/* Caret triangle */}
          <div
            className="absolute -top-[0.7em]"
            style={{
              right: 35,
              width: 0,
              height: 0,
              borderLeft: '0.7em solid transparent',
              borderRight: '0.7em solid transparent',
              borderBottom: '0.8em solid white',
            }}
            aria-hidden="true"
          />

          <div className="mb-4">
            <label htmlFor="passkey-email" className="mb-2 block text-sm text-[rgba(0,0,0,.7)]">
              Email address
            </label>
            <input
              id="passkey-email"
              type="email"
              placeholder="email@example.com"
              className="h-[52px] w-full rounded-[4px] border-2 border-[rgba(0,0,0,.05)] bg-white px-3 text-base text-[rgba(0,0,0,.7)] placeholder:text-[rgba(0,0,0,.4)] focus:border-[rgba(0,0,0,.1)] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="passkey-password" className="mb-2 block text-sm text-[rgba(0,0,0,.7)]">
              Password
            </label>
            <input
              id="passkey-password"
              type="password"
              placeholder="Password"
              className="h-[52px] w-full rounded-[4px] border-2 border-[rgba(0,0,0,.05)] bg-white px-3 text-base text-[rgba(0,0,0,.7)] placeholder:text-[rgba(0,0,0,.4)] focus:border-[rgba(0,0,0,.1)] focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input id="passkey-remember" type="checkbox" className="h-4 w-4" />
            <label htmlFor="passkey-remember" className="text-sm text-[rgba(0,0,0,.7)]">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-[5px] bg-[#fa697c] py-3 text-sm font-normal text-white hover:bg-[#f83851]"
          >
            Sign in
          </button>
        </form>
      )}
    </div>
  )
}
