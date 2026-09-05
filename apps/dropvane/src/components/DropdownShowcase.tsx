import { useState, useRef, useEffect } from 'react'

export function DropdownShowcase() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center px-4 py-28">
      <h1 className="mb-12 text-center text-[28px] font-normal text-black">Dropdown #10</h1>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-[5px] bg-[#94aa2a] px-6 py-3 text-sm font-normal text-white shadow-[0px_10px_20px_-6px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#708120]"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Request A Quote
        </button>
        {isOpen && (
          <div className="absolute left-0 z-10 mt-5 w-[22rem] rounded-lg border-none bg-white shadow-[0px_10px_34px_-20px_rgba(0,0,0,0.41)] max-sm:left-1/2 max-sm:mt-[70px] max-sm:-translate-x-1/2">
            <div className="rounded-t-lg bg-[#94aa2a] px-5 py-4">
              <h3 className="text-[20px] font-bold text-white">Consultation</h3>
            </div>
            <form className="px-5 py-4" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 w-full rounded border-2 border-black/5 px-3 text-[16px] text-black placeholder-black/40 focus:border-black/10 focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-full rounded border-2 border-black/5 px-3 text-[16px] text-black placeholder-black/40 focus:border-black/10 focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className="h-12 w-full rounded border-2 border-black/5 px-3 text-[16px] text-black placeholder-black/40 focus:border-black/10 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full resize-none rounded border-2 border-black/5 px-3 py-2 text-[16px] text-black placeholder-black/40 focus:border-black/10 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mb-5 rounded-[5px] bg-[#94aa2a] px-6 py-3 text-sm font-normal text-white shadow-[0px_10px_20px_-6px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#708120]"
              >
                Send A Message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
