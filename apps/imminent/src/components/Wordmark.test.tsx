import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the brand name as a text mark grown across the row', () => {
    const { container } = render(<Wordmark />)

    expect(container.firstElementChild).toHaveClass('my-[10px]', 'mr-[30px]', 'grow')

    const link = screen.getByRole('link', { name: 'Imminent' })

    expect(link).toHaveAttribute('href', '#')
    expect(link).toHaveClass(
      'font-heading',
      'text-[28px]',
      'font-bold',
      'text-white',
      'transition-opacity',
      'duration-[400ms]',
      'hover:opacity-80',
    )
    expect(link.querySelector('img')).toBeNull()
  })

  it('accepts a className override', () => {
    const { container } = render(<Wordmark className="mb-0" />)

    expect(container.firstElementChild).toHaveClass('mb-0')
  })
})
