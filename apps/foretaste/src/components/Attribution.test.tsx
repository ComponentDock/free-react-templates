import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock in one low-emphasis line', () => {
    render(<Attribution />)

    const line = screen.getByTestId('attribution')

    expect(line.tagName).toBe('P')
    expect(line).toHaveTextContent('More templates at Component Dock')
    expect(line).toHaveClass('font-sans', 'text-[11px]', 'leading-[1.5]', 'text-white/70')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('accepts layout overrides', () => {
    render(<Attribution className="absolute" />)

    expect(screen.getByTestId('attribution')).toHaveClass('absolute')
  })
})
