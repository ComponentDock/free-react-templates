import { useState, useEffect } from 'react'

const words = ['Attractions', 'Events', 'Hotels', 'Restaurants']

type Phase = 'typing' | 'pause' | 'deleting'

export function useTypedText() {
  const [typedText, setTypedText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const word = words[wordIdx] as string
    const speed = phase === 'deleting' ? 60 : 100

    const timeout = setTimeout(() => {
      if (phase === 'typing') {
        setTypedText(word.slice(0, charIdx + 1))
        if (charIdx + 1 === word.length) {
          setPhase('pause')
        } else {
          setCharIdx(charIdx + 1)
        }
      } else if (phase === 'pause') {
        setPhase('deleting')
      } else {
        setTypedText(word.slice(0, charIdx))
        if (charIdx === 0) {
          setPhase('typing')
          setWordIdx((wordIdx + 1) % words.length)
        } else {
          setCharIdx(charIdx - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIdx, phase, wordIdx])

  return { typedText, wordIdx, phase, charIdx }
}
