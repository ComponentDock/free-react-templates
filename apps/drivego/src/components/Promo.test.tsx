import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Promo } from './Promo'

describe('Promo', () => {
  it('renders the heading, description, CTA, and promo image', () => {
    render(<Promo />)
    expect(
      screen.getByRole('heading', { name: /You can easily avail our promo/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Meet them now/i })).toHaveAttribute('href', '#listing')
    expect(screen.getByRole('img', { name: /Promotional car/i })).toHaveAttribute(
      'src',
      expect.stringContaining('drivego-promo'),
    )
  })
})
