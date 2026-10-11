import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Subtitle } from './Subtitle'

describe('Subtitle', () => {
  it('renders one centred 25px serif line with 67px below it', () => {
    render(<Subtitle />)

    const subtitle = screen.getByText(/Leave your e-mail and we'll tell you/)

    expect(subtitle).toHaveClass(
      'pb-[67px]',
      'text-center',
      'font-serif',
      'text-[25px]',
      'leading-[1.2]',
      'text-white',
    )
  })

  it('accepts a className override', () => {
    render(<Subtitle className="pb-0" />)

    expect(screen.getByText(/Leave your e-mail and we'll tell you/)).toHaveClass('pb-0')
  })
})
