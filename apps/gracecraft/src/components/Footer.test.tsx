import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows site name, contact info, and quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /gracecraft/i })).toBeInTheDocument()
    expect(screen.getByText(/1195 Lobortis Rd/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 234 800 8080/)).toBeInTheDocument()
    expect(screen.getByText(/infogracecraft@gmail.com/)).toBeInTheDocument()
    for (const link of ['About us', 'Contact', 'Donation', 'Blog', 'Sermons', 'Events']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('has Component Dock link in copyright', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects invalid email and confirms valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/enter your email/i)
    const submit = screen.getByRole('button', { name: /subscribe/i })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'jane@example.com')
    await user.click(submit)
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })

  it('shows social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })
})
