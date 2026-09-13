import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Landcraft')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('(+1) 1144-1254')).toBeInTheDocument()
    expect(screen.getByText('info@landcraft.com')).toBeInTheDocument()
  })

  it('renders the quick contact form', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('submits the quick contact form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const nameInput = screen.getByRole('textbox', { name: /full name/i })
    await user.type(nameInput, 'John')
    const submitBtn = screen.getByRole('button', { name: 'Send' })
    await user.click(submitBtn)
    // Form should still be rendered (onSubmit prevents default)
    expect(nameInput).toBeInTheDocument()
  })

  it('renders the copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders the Instagram grid', () => {
    render(<Footer />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
