import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClosingCta } from './ClosingCta'

describe('ClosingCta', () => {
  it('renders the brand ground, the heading and the one-line promise', () => {
    const { container } = render(<ClosingCta />)

    const band = container.querySelector('#contact')
    expect(band).toHaveClass('bg-primary-700')
    expect(screen.getByRole('heading', { name: 'Letter on the counter?' })).toBeInTheDocument()
    expect(
      screen.getByText('Fixed price, twenty minutes, filed the same day.'),
    ).toBeInTheDocument()
  })

  it('offers a white solid CTA and a 2 px outline phone link', () => {
    render(<ClosingCta />)

    const book = screen.getByRole('link', { name: 'Book a test' })
    expect(book).toHaveClass('bg-white', 'text-primary-700')

    const phone = screen.getByRole('link', { name: 'Call (555) 150-1500' })
    expect(phone).toHaveAttribute('href', 'tel:5551501500')
    expect(phone).toHaveClass('border-2', 'border-white/40')
  })
})
