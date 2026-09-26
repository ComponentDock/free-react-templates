import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('displays the CTA headline', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Do you have any Project/ })).toBeInTheDocument()
  })

  it('displays a description paragraph', () => {
    render(<Footer />)
    expect(screen.getByText(/open to discussing new projects/)).toBeInTheDocument()
  })

  it('displays social links for Behance, Dribbble, Medium, and LinkedIn', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://www.behance.net',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://www.dribbble.com',
    )
    expect(screen.getByRole('link', { name: 'Medium' })).toHaveAttribute(
      'href',
      'https://medium.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com',
    )
  })

  it('displays the copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders on a dark background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-dark-brown')
  })

  it('social links open in new tabs', () => {
    render(<Footer />)
    const behance = screen.getByRole('link', { name: 'Behance' })
    expect(behance).toHaveAttribute('target', '_blank')
    expect(behance).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
