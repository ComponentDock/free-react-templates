import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Help, About, and Shop columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Help' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument()
  })

  it('renders help links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shipping' })).toBeInTheDocument()
  })

  it('renders about links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument()
  })

  it('renders shop links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Store' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gift Cards' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Student Discount' })).toBeInTheDocument()
  })

  it('renders the newsletter form in footer', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits the footer newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the current year in the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Merch`))).toBeInTheDocument()
  })
})
