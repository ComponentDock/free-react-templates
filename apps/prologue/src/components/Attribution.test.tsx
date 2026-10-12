import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock in the shared footer line', () => {
    render(<Attribution />)

    const line = screen.getByTestId('attribution')

    expect(line.tagName).toBe('P')
    expect(line).toHaveTextContent('More templates at Component Dock')
    expect(line).toHaveClass('font-sans', 'text-[11px]', 'leading-[1.5]', 'text-subline')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('accepts layout overrides', () => {
    render(<Attribution className="bottom-0" />)

    expect(screen.getByTestId('attribution')).toHaveClass('bottom-0')
  })
})
