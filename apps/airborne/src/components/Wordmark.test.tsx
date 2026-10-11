import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders an original text wordmark that grows to fill the row', () => {
    const { container } = render(<Wordmark />)

    expect(container.firstElementChild).toHaveClass('my-[10px]', 'mr-[30px]', 'grow')

    const link = screen.getByRole('link', { name: 'Airborne' })

    expect(link).toHaveAttribute('href', '#')
    expect(link).toHaveClass(
      'font-heading',
      'text-[28px]',
      'font-bold',
      'tracking-[0.18em]',
      'text-white',
      'uppercase',
    )
  })

  it('accepts a className override on the wrapper', () => {
    const { container } = render(<Wordmark className="order-2" />)

    expect(container.firstElementChild).toHaveClass('order-2')
  })
})
