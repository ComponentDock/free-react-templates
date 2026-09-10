import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Promo } from './Promo'

describe('Promo', () => {
  it('renders the feature highlights', () => {
    render(<Promo />)
    expect(screen.getByRole('heading', { name: 'Our Location' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24/7 Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fast Delivery' })).toBeInTheDocument()
  })

  it('renders the dark CTA section', () => {
    render(<Promo />)
    expect(
      screen.getByRole('heading', { name: /We provide international freight/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toHaveAttribute('href', '#contact')
  })
})
