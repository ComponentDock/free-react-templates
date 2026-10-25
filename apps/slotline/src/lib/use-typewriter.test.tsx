import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useTypewriter } from './use-typewriter'

function Probe({ phrases }: { phrases: readonly string[] }) {
  const phrase = useTypewriter(phrases, 1000)
  return <p data-testid="phrase">{phrase}</p>
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

describe('useTypewriter', () => {
  it('cycles the phrases and wraps around', () => {
    vi.useFakeTimers()
    render(<Probe phrases={['one', 'two']} />)
    const line = screen.getByTestId('phrase')
    expect(line).toHaveTextContent('one')

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(line).toHaveTextContent('two')

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(line).toHaveTextContent('one')
  })

  it('does nothing with a single phrase', () => {
    vi.useFakeTimers()
    render(<Probe phrases={['only']} />)
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('phrase')).toHaveTextContent('only')
  })

  it('renders empty when handed no phrases at all', () => {
    render(<Probe phrases={[]} />)
    expect(screen.getByTestId('phrase')).toBeEmptyDOMElement()
  })

  it('freezes on the first phrase under reduced motion', () => {
    vi.stubGlobal('matchMedia', () => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    vi.useFakeTimers()
    render(<Probe phrases={['one', 'two']} />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByTestId('phrase')).toHaveTextContent('one')
  })
})
