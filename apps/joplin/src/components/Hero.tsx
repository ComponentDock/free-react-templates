import { useState, useEffect } from 'react'

const words = ['Company A', 'Company B', 'Company C', 'Company D']

export interface TypewriterState {
  wordIndex: number
  displayed: string
  isDeleting: boolean
}

export const initialState: TypewriterState = { wordIndex: 0, displayed: '', isDeleting: false }

export function nextTypewriterState(state: TypewriterState): TypewriterState {
  const current = words[state.wordIndex] as string
  if (!state.isDeleting && state.displayed.length < current.length) {
    return { ...state, displayed: current.slice(0, state.displayed.length + 1) }
  }
  if (!state.isDeleting && state.displayed.length >= current.length) {
    return { ...state, isDeleting: true }
  }
  if (state.isDeleting && state.displayed.length > 0) {
    return { ...state, displayed: state.displayed.slice(0, -1) }
  }
  return { wordIndex: (state.wordIndex + 1) % words.length, displayed: '', isDeleting: false }
}

export function computeDelay(state: TypewriterState): number {
  if (state.isDeleting) return 60
  const wordLen = (words[state.wordIndex] as string).length
  if (state.displayed.length === wordLen) return 2000
  return 100
}

export function Hero() {
  const [state, setState] = useState<TypewriterState>(initialState)

  useEffect(() => {
    const id = setTimeout(() => setState(nextTypewriterState), computeDelay(state))
    return () => clearTimeout(id)
  }, [state])

  return (
    <section id="home" data-testid="hero" className="flex min-h-[70vh] items-center bg-cream pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-6xl font-bold text-maroon sm:text-8xl">Joplin.</h1>
        <p className="mt-4 text-lg font-medium text-secondary">Digital Product Designer</p>
        <p className="mt-2 text-sm text-secondary">
          Head of design at <span className="font-semibold text-maroon">{state.displayed}</span>
          <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-maroon">&nbsp;</span>
        </p>
      </div>
    </section>
  )
}
