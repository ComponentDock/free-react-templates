import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useReducedMotion } from './use-reduced-motion'

function Probe() {
  return <p data-testid="reduced">{String(useReducedMotion())}</p>
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useReducedMotion', () => {
  it('is false where matchMedia does not exist', () => {
    render(<Probe />)
    expect(screen.getByTestId('reduced')).toHaveTextContent('false')
  })

  it('follows the live media query', () => {
    let handler: (() => void) | null = null
    const list = {
      matches: true,
      addEventListener: (_: string, next: () => void) => {
        handler = next
      },
      removeEventListener: vi.fn(),
    }
    vi.stubGlobal('matchMedia', () => list)

    render(<Probe />)
    expect(screen.getByTestId('reduced')).toHaveTextContent('true')

    list.matches = false
    act(() => {
      handler?.()
    })
    expect(screen.getByTestId('reduced')).toHaveTextContent('false')
  })
})
