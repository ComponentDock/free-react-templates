import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BestSellers } from './BestSellers'

describe('BestSellers', () => {
  it('renders the section heading and 8 product cards', () => {
    render(<BestSellers />)

    expect(screen.getByRole('heading', { name: 'Best Sellers' })).toBeInTheDocument()

    const orderButtons = screen.getAllByRole('link', { name: /order now/i })
    expect(orderButtons.length).toBe(8)
  })

  it('shows ribbon badges on specific items', () => {
    render(<BestSellers />)

    expect(screen.getAllByText('OFFER').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('SPECIALITY')).toBeInTheDocument()
    expect(screen.getByText('PLUS SIZE')).toBeInTheDocument()
  })

  it('renders the See Todays Menu CTA at the bottom', () => {
    render(<BestSellers />)

    const ctaButtons = screen.getAllByRole('link', { name: /see today/i })
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })
})
