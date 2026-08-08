import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows Products, Company, and Resources link columns', () => {
    render(<Footer />)

    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Stocks')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('shows a copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Tradewell\. All rights reserved\./)).toBeInTheDocument()
  })

  it('renders social links with accessible names', () => {
    render(<Footer />)

    const social = screen.getByRole('navigation', { name: 'Social links' })
    expect(within(social).getByRole('link', { name: 'Tradewell on X' })).toBeInTheDocument()
    expect(within(social).getByRole('link', { name: 'Tradewell on LinkedIn' })).toBeInTheDocument()
  })
})
