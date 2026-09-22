import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders three contact sections', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /talk to us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /e-mail/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /location/i })).toBeInTheDocument()
  })

  it('includes a Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })
})
