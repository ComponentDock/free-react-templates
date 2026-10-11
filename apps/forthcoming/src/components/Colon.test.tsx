import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Colon } from './Colon'

describe('Colon', () => {
  it('prints a decorative colon at the digit size', () => {
    render(<Colon />)

    const colon = screen.getByTestId('countdown-colon')

    expect(colon).toHaveClass(
      'pb-[22px]',
      'text-[70px]',
      'leading-none',
      'font-light',
      'text-white',
    )
    expect(colon).toHaveTextContent(':')
    expect(colon).toHaveAttribute('aria-hidden', 'true')
  })

  it('accepts a className override', () => {
    render(<Colon className="max-[768px]:hidden" />)

    expect(screen.getByTestId('countdown-colon')).toHaveClass('max-[768px]:hidden')
  })
})
