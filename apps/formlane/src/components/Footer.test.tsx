import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows more templates link', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    const componentDockLinks = links.filter(
      (link) => link.getAttribute('href') === 'https://www.componentdock.com/',
    )
    expect(componentDockLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('links open in new tab', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      if (link.getAttribute('href') === 'https://www.componentdock.com/') {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
      }
    })
  })
})
