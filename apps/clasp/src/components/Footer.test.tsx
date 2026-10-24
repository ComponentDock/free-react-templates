import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument()
  })

  it('names the template', () => {
    render(<Footer />)
    expect(screen.getByText(/clasp/i)).toBeInTheDocument()
  })
})
