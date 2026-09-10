import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section title and form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Keep in Touch/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts.length).toBeGreaterThanOrEqual(1)
  })

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText(/enter your name/i), 'John')
    await user.type(screen.getByPlaceholderText(/enter email/i), 'bad')
    await user.type(screen.getByPlaceholderText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText(/enter your name/i), 'John')
    await user.type(screen.getByPlaceholderText(/enter email/i), 'john@test.com')
    await user.type(screen.getByPlaceholderText(/message/i), 'Hello world')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Your message has been sent/i)).toBeInTheDocument()
  })
})
