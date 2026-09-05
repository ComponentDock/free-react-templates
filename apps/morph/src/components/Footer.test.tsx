import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the app name', () => {
    render(<Footer />)
    expect(screen.getByText('Morph')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText(/animated checkbox components/i)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders the "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
