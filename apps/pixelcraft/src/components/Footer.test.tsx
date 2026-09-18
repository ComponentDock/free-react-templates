import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Pixelcraft' })).toBeInTheDocument()
    expect(screen.getByText(/Creative digital agency/i)).toBeInTheDocument()
    for (const label of ['Twitter', 'Behance', 'Dribbble', 'Facebook']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
