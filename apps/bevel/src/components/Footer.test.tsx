import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('opens the link in a new tab', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders inside a contentinfo landmark', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the link text', () => {
    render(<Footer />)

    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})
