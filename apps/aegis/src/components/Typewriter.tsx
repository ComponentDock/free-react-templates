import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: readonly string[]
  typingSpeed?: number
  holdTime?: number
}

/* Word-cycling typewriter for the hero headline tail: types each word
   character-by-character, holds it, deletes, then types the next. Starts
   with the first word fully rendered so the heading reads complete on
   first paint (matching the live demo's static DOM fallback "Strike"). */
export function Typewriter({ words, typingSpeed = 90, holdTime = 2400 }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charCount, setCharCount] = useState(words[0]?.length ?? 0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
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

    // Deleting finished — move to the next word and start typing its first char.
    const timer = setTimeout(() => {
      setWordIndex((index) => (index + 1) % words.length)
      setDeleting(false)
      setCharCount(1)
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [words, wordIndex, charCount, deleting, typingSpeed, holdTime])

  return (
    <span className="text-primary-600 dark:text-primary-400">
      {words[wordIndex]?.slice(0, charCount)}
      <span aria-hidden="true" className="font-light">
        |
      </span>
    </span>
  )
}
