import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Vitaheal+ logo', () => {
    render(<Footer />)
    expect(screen.getByText(/vitaheal/)).toBeInTheDocument()
  })

  it('shows Quick Contact heading', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Contact')).toBeInTheDocument()
  })

  it('has Name, Email, Message fields and Send button', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday – Thursday')).toBeInTheDocument()
    expect(screen.getByText('8.00 – 19.00')).toBeInTheDocument()
    expect(screen.getByText('Friday')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('has a Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('shows error for invalid contact form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    // Fill name and message but use invalid email to pass HTML validation but fail JS
    await user.type(screen.getByPlaceholderText('Name'), 'Test')
    await user.type(screen.getByPlaceholderText('E-mail'), 'not-an-email')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('submits valid contact form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('E-mail'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/message sent/i)
  })
})
