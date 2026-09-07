import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('opens link in new tab', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'target',
      '_blank',
    )
  })

  it('has rel noopener noreferrer', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    )
  })

  it('shows Made with text', () => {
    render(<Footer />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })
})
