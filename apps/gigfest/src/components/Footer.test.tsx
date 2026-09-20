import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows event details, CTA, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText('12 Feb, 2020')).toBeInTheDocument()
    expect(screen.getByText('Green Avenue, New York')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Tickets' })).toHaveAttribute(
      'href',
      '#buy-tickets',
    )

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('displays the copyright with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
