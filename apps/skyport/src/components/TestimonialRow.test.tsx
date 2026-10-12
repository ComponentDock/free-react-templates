import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialRow } from './TestimonialRow'

describe('TestimonialRow', () => {
  it('renders exactly one quote with its attribution block', () => {
    render(<TestimonialRow />)

    expect(screen.getByText('Mark Winslow')).toBeInTheDocument()
    expect(screen.getByText('Skyline Systems')).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(2)
  })

  it('separates the quote with a hairline rule under the row', () => {
    const { container } = render(<TestimonialRow />)

    const row = container.querySelector('div.border-b')
    expect(row).toHaveClass('border-line', 'pb-[100px]')
  })

  it('keeps the reference band padding and the divider column', () => {
    const { container } = render(<TestimonialRow />)

    expect(container.querySelector('section')).toHaveClass('pt-[50px]')
    const quote = screen.getByText(/We moved eleven product sites/).parentElement
    expect(quote).toHaveClass('sm:border-l', 'sm:pl-[30px]')
  })
})
