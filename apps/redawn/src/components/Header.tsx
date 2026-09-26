import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const WORDS = ['web resources', 'psd files', 'mockups'] as const

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps) {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative w-full px-6 py-20 lg:px-[calc((100%-1170px)/2)]">
      <div className="inline-block align-top">
        <a href="/" aria-label="Redawn home">
          <div className="flex h-[95px] w-[80px] items-center justify-center bg-brand text-2xl font-bold text-white">
            R
          </div>
        </a>
      </div>
      <div className="ml-8 inline-block">
        <h1 className="text-[28px] font-light leading-[30px] text-ink">
          <span>pixel precise </span>
          <span className="font-bold text-brand">{WORDS[wordIndex]}</span>
          <span className="block">to suit all your needs.</span>
        </h1>
      </div>
      <div className="absolute right-0 top-[130px] z-[101]">{children}</div>
    </header>
  )
}
