import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'
import { describe, expect, it } from 'vitest'

describe('CallToAction', () => {
  it('renders the heading, copy, and phone number over a photo background', () => {
    const { container } = render(<CallToAction />)
    expect(screen.getByRole('heading', { level: 2, name: 'Free Call Back' })).toBeInTheDocument()
    expect(screen.getByText(/leave us your number/i)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: '+1 970-668-3568' })
    expect(phone).toHaveAttribute('href', 'tel:+19706683568')
    expect(container.querySelector('section#call-to-action')).toHaveStyle({
      backgroundImage: expect.stringContaining('spotless-callto'),
    })
  })
})
