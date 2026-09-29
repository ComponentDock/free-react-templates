import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders "Made with" text', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('Component Dock link opens in new tab', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has fixed positioning at bottom', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('fixed')
    expect(footer.className).toContain('bottom-0')
  })

  it('has semi-transparent text on paragraph', () => {
    render(<Footer />)
    const paragraph = screen.getByText(/Made with/)
    expect(paragraph.className).toContain('text-white/50')
  })
})
