import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with dark background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the LookCraft logo', () => {
    render(<Footer />)
    expect(screen.getByText('LookCraft')).toBeInTheDocument()
  })

  it('renders useful links section', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
  })

  it('renders contact info section', () => {
    render(<Footer />)
    const contacts = screen.getAllByText('Contact')
    expect(contacts.length).toBeGreaterThanOrEqual(1)
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link', { name: /component dock/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/©.*LookCraft/i)).toBeInTheDocument()
  })
})
