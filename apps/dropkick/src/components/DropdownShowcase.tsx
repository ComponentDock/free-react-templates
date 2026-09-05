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
      <h1 className="mb-12 text-center text-[28px] font-medium text-black">Dropdown #09</h1>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-[5px] bg-[#3fc5f0] px-4 py-3 text-sm font-normal text-white shadow-[0px_10px_20px_-6px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#12b5ea]"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          View Details
          <span className="ml-2 inline-block text-[10px]">&#9662;</span>
        </button>
        {isOpen && (
          <div className="absolute left-1/2 z-10 mt-5 flex w-[20rem] -translate-x-1/2 rounded-lg border-none bg-white p-5 shadow-[0px_10px_34px_-20px_rgba(0,0,0,0.41)] max-sm:left-1/2 max-sm:mt-[70px] max-sm:-translate-x-1/2">
            <div
              className="w-1/2 rounded bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/dropkick/400/300)`,
              }}
              role="img"
              aria-label="Detail illustration"
            />
            <div className="w-1/2 pl-3">
              <p className="text-sm leading-relaxed text-gray">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
