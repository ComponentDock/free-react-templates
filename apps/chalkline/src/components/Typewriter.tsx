import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

interface TypewriterProps {
  words: readonly string[]
  typingSpeed?: number
  holdTime?: number
}

/* The hero's second line: types each phrase, holds it, deletes it, then types
   the next. The first phrase is rendered complete on first paint, so the
   headline reads as a whole before anything moves — and stays that way when the
   visitor has asked for reduced motion. */
export function Typewriter({ words, typingSpeed = 70, holdTime = 2200 }: TypewriterProps) {
  const [reduced] = useState(prefersReducedMotion)
  const first = words[0] ?? ''
  const [wordIndex, setWordIndex] = useState(0)
  const [charCount, setCharCount] = useState(first.length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) {
      return
    }

    const word = words[wordIndex] ?? ''

    if (!deleting && charCount < word.length) {
      const timer = setTimeout(() => setCharCount((count) => count + 1), typingSpeed)
      return () => clearTimeout(timer)
    }

    if (!deleting && charCount === word.length) {
      const timer = setTimeout(() => setDeleting(true), holdTime)
      return () => clearTimeout(timer)
    }

    if (deleting && charCount > 0) {
      const timer = setTimeout(() => setCharCount((count) => count - 1), typingSpeed)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setWordIndex((index) => (index + 1) % words.length)
      setDeleting(false)
      setCharCount(1)
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [words, wordIndex, charCount, deleting, typingSpeed, holdTime, reduced])

  return (
    <span className="text-gradient">
      <span aria-hidden="true">
        {reduced ? first : (words[wordIndex] ?? '').slice(0, charCount)}
        {reduced ? null : <span className="font-light">|</span>}
      </span>
      <span className="sr-only">{first}</span>
    </span>
  )
}
