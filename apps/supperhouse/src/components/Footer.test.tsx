import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /About Us/ })).toBeInTheDocument()
  })

  it('renders the About Us description', () => {
    render(<Footer />)
    expect(screen.getByText(/Supperhouse is a premium dining destination/)).toBeInTheDocument()
  })

  it('renders the Contact Us heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /Contact Us/ })).toBeInTheDocument()
  })

  it('renders the Newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /Newsletter/ })).toBeInTheDocument()
  })

  it('renders the newsletter description', () => {
    render(<Footer />)
    expect(screen.getByText(/Subscribe to receive updates/)).toBeInTheDocument()
  })

  it('renders the newsletter form with email input', () => {
    render(<Footer />)
    expect(screen.getByRole('form', { name: 'Newsletter signup' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /Subscribe/ })).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByText('123 Gourmet Avenue, New York, NY 10001')).toBeInTheDocument()
  })

  it('renders phone numbers as links', () => {
    render(<Footer />)
    const phone1 = screen.getByRole('link', { name: '(555) 123-4567' })
    const phone2 = screen.getByRole('link', { name: '(555) 987-6543' })
    expect(phone1).toHaveAttribute('href', expect.stringContaining('tel:'))
    expect(phone2).toHaveAttribute('href', expect.stringContaining('tel:'))
  })

  it('renders email link', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', { name: 'info@supperhouse.com' })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@supperhouse.com')
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
    expect(cdLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social icons with correct aria-labels', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the current copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('copyright mentions Supperhouse', () => {
    render(<Footer />)
    const matches = screen.getAllByText(/Supperhouse/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('allows typing into newsletter email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('newsletter form submit is prevented', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitBtn = screen.getByRole('button', { name: /Subscribe/ })
    await user.click(submitBtn)
    // Form should still be in the document (no navigation)
    expect(screen.getByRole('form', { name: 'Newsletter signup' })).toBeInTheDocument()
  })
})
