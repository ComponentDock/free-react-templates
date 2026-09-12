import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with site name and Component Dock link', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /Finflow/i })).toHaveAttribute('href', '#home')
    expect(within(footer).getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('has quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('has a newsletter subscription form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('renders social media links in the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getAllByLabelText('Facebook').length).toBeGreaterThanOrEqual(1)
    expect(within(footer).getAllByLabelText('Twitter').length).toBeGreaterThanOrEqual(1)
    expect(within(footer).getAllByLabelText('LinkedIn').length).toBeGreaterThanOrEqual(1)
    expect(within(footer).getAllByLabelText('Instagram').length).toBeGreaterThanOrEqual(1)
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('jane@example.com')
    const submit = screen.getByRole('button', { name: /Subscribe/i })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'jane@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })
})
