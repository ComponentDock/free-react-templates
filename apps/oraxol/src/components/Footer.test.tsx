import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and description', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Oraxol' })).toHaveTextContent('Oraxol')
    expect(screen.getByText(/small river named Duden/i)).toBeInTheDocument()
  })

  it('displays explore links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
  })

  it('displays quick links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms & conditions/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument()
  })

  it('displays category links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /graphic design/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /web design/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /branding & printing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /web development/i })).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Footer />)

    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('includes the Component Dock attribution link', () => {
    render(<Footer />)

    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('does not reference ColorLib', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).not.toMatch(/colorlib/i)
  })
})
