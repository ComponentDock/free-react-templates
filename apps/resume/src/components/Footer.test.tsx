import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, email, address, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText('Resume')).toBeInTheDocument()
    const email = screen.getByRole('link', { name: 'hireme@portfolio.com' })
    expect(email).toHaveAttribute('href', 'mailto:hireme@portfolio.com')
    expect(screen.getByText(/221B Baker Street/)).toBeInTheDocument()
    expect(screen.getByText(/Park Road, USA - 215431/)).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Stay Connected social icons', () => {
    render(<Footer />)

    expect(screen.getByText('Stay Connected')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('keeps social links on the page without navigating', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    facebook.addEventListener('click', (event) => event.preventDefault(), { once: true })
    facebook.click()

    expect(window.location.hash).toBe('')
  })
})
