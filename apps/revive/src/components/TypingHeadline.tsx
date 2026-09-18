import { useState, useEffect, useRef } from 'react'

const WORDS = ['web resources', 'psd files', 'mockups']
const TYPING_SPEED = 100
const ERASING_SPEED = 60
const WORD_PAUSE_MS = 2000

export function TypingHeadline() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // wordIndex is always valid (cycles via modulo)
  const currentWord = WORDS[wordIndex] as string

  useEffect(() => {
    const cleanup = () => {
      clearTimeout(timerRef.current as ReturnType<typeof setTimeout>)
    }

    if (isPaused) {
      timerRef.current = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, WORD_PAUSE_MS)
      return cleanup
    }

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timerRef.current = setTimeout(() => {
          setCharIndex((c) => c + 1)
        }, TYPING_SPEED)
      } else {
        timerRef.current = setTimeout(() => setIsPaused(true), 0)
      }
      return cleanup
    }

    // isDeleting
    if (charIndex > 0) {
      timerRef.current = setTimeout(() => {
        setCharIndex((c) => c - 1)
      }, ERASING_SPEED)
    } else {
      timerRef.current = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }, 0)
    }
    return cleanup
  }, [charIndex, isDeleting, isPaused, currentWord.length])

  const displayText = currentWord.slice(0, charIndex)

  return (
    <span className="relative">
      <span className="font-bold text-brand">{displayText}</span>
      <span
        className="ml-0.5 inline-block h-6 w-0.5 align-middle bg-brand"
        style={{ animation: 'blink 1s step-end infinite' }}
        aria-hidden="true"
      />
    </span>
  )
}
