import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders four column sections', () => {
    render(<Footer />)
    for (const title of ['About', 'Learn More', 'Support', 'About Us']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders the Download button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Download/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/Proton/)).toBeInTheDocument()
  })
})
