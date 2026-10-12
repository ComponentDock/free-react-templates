import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownSeparator } from './CountdownSeparator'

describe('CountdownSeparator', () => {
  it('renders an outer colon at the numerals size, dropping out at the smallest width', () => {
    render(<CountdownSeparator />)

    const colon = screen.getByTestId('countdown-separator-outer')

    expect(colon).toHaveTextContent(':')
    expect(colon).toHaveAttribute('aria-hidden', 'true')
    expect(colon).toHaveClass(
      'pt-[15px]',
      'font-heading',
      'text-[120px]',
      'leading-none',
      'text-white',
      'italic',
      'max-[576px]:hidden',
    )
    expect(colon.className).not.toContain('max-[992px]:hidden')
  })

  it('hides the middle colon earlier, at the tablet width', () => {
    render(<CountdownSeparator position="middle" className="extra" />)

    const colon = screen.getByTestId('countdown-separator-middle')

    expect(colon).toHaveClass('max-[992px]:hidden', 'extra')
    expect(colon.className).not.toContain('max-[576px]:hidden')
  })
})
