import { describe, expect, it } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 civicore/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders top products links', () => {
    render(<Footer />)
    expect(screen.getByText('Job Search')).toBeInTheDocument()
    expect(screen.getByText('Resume Builder')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(
      within(footer).getAllByRole('link', { name: /facebook/i }).length,
    ).toBeGreaterThanOrEqual(1)
    expect(within(footer).getAllByRole('link', { name: /twitter/i }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(
      within(footer).getAllByRole('link', { name: /dribbble/i }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('subscribes with a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })

  it('does not subscribe with empty email', () => {
    render(<Footer />)
    const form = document.querySelector('form')!
    // fireEvent.submit bypasses native required validation
    fireEvent.submit(form)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.queryByText(/thanks for subscribing/i)).not.toBeInTheDocument()
  })

  it('handles email onChange correctly', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'a')
    expect(input).toHaveValue('a')
    await user.clear(input)
    expect(input).toHaveValue('')
  })
})
