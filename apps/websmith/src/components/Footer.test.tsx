import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand wordmark and navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Websmith/i })).toBeInTheDocument()
    for (const link of ['Home', 'About Us', 'Privacy', 'Terms', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Enter email')
    const submit = screen.getByRole('button', { name: /Subscribe/i })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'jane@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })

  it('renders the footer with dark background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveStyle({ backgroundColor: '#333333' })
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders the Subscribe Newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('renders the Navigation heading', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('renders a brand description paragraph', () => {
    render(<Footer />)
    expect(screen.getByText(/creative digital agency/i)).toBeInTheDocument()
  })
})
