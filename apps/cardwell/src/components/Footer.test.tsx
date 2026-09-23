import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with three columns', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: "Let's Talk" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Latest Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', { name: /hello@cardwell.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@cardwell.com')
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google' })).toBeInTheDocument()
  })

  it('renders latest blog entries', () => {
    render(<Footer />)
    expect(screen.getByText('Web Design Trends 2025')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Apps')).toBeInTheDocument()
    expect(screen.getByText('Creative Process Tips')).toBeInTheDocument()
  })

  it('renders the newsletter form and handles submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByRole('textbox', { name: /email for newsletter/i })
    expect(emailInput).toBeInTheDocument()
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    expect(submitBtn).toBeInTheDocument()

    await user.type(emailInput, 'test@example.com')
    fireEvent.submit(submitBtn.closest('form')!)
  })

  it('renders the copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 All rights reserved/)).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })
})
