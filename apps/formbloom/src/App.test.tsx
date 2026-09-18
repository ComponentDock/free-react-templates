import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /new york/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact info/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /message us/i })).toBeInTheDocument()
  })

  it('displays contact details', () => {
    render(<App />)
    expect(screen.getByText(/9757 Aspen Lane South/)).toBeInTheDocument()
    expect(screen.getByText(/Richmond Hill, NY 11419/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(291\) 939 9321/)).toBeInTheDocument()
    expect(screen.getByText(/info@mywebsite\.com/)).toBeInTheDocument()
  })

  it('has form fields and send button', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/write your message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('accepts user input in all fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nameInput = screen.getByPlaceholderText(/your name/i)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const messageInput = screen.getByPlaceholderText(/write your message/i)

    await user.type(nameInput, 'Alice')
    await user.type(emailInput, 'alice@example.com')
    await user.type(messageInput, 'Hello')

    expect(nameInput).toHaveValue('Alice')
    expect(emailInput).toHaveValue('alice@example.com')
    expect(messageInput).toHaveValue('Hello')
  })

  it('links footer to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText(/your name/i), 'Bob')
    await user.type(screen.getByPlaceholderText(/email/i), 'bob@test.com')
    await user.type(screen.getByPlaceholderText(/write your message/i), 'Test')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    // Form fields should retain values after submit (no page reload)
    expect(screen.getByPlaceholderText(/your name/i)).toHaveValue('Bob')
  })
})
