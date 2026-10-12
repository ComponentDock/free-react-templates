import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Scrim } from './Scrim'

describe('Scrim', () => {
  it('is the single half-black layer the panels paint over', () => {
    render(<Scrim />)

    const scrim = screen.getByTestId('scrim')

    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(scrim).toHaveClass('absolute', 'inset-0', 'z-[-1]', 'bg-scrim')
  })

  it('accepts layout overrides', () => {
    render(<Scrim className="hidden" />)

    expect(screen.getByTestId('scrim')).toHaveClass('hidden')
  })
})
