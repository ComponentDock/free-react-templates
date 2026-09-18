import { useState } from 'react'
import { TypingHeadline } from './TypingHeadline'
import { HamburgerMenu } from './HamburgerMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative mx-auto w-full max-w-[1170px] pb-[50px]">
      <div className="inline-block pt-[80px]">
        <a href="#">
          <div className="flex h-[95px] w-[80px] items-center justify-center bg-brand text-[24px] font-bold text-white">
            R
          </div>
        </a>
      </div>
      <div className="inline-block pl-[30px]">
        <h1 className="text-[28px] font-light leading-[30px]">
          <span>
            pixel precise <TypingHeadline />
          </span>
          <span className="mt-1 block">to suit all your needs.</span>
        </h1>
      </div>
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="absolute right-0 top-[130px] z-[101] cursor-pointer border-none bg-transparent p-0"
        aria-label="Open menu"
      >
        <div className="mb-1 h-1 w-[30px] bg-text-dark" />
        <div className="mb-1 h-1 w-[24px] bg-text-dark" />
        <div className="mb-1 h-1 w-[15px] bg-text-dark" />
        <div className="h-1 w-[30px] bg-text-dark" />
      </button>
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
