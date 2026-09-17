import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JotDown — Contact Form Template')
  })

  it('renders the contact form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Send Us A Message')
  })

  it('renders the email input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
  })

  it('renders the message textarea', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('How Can We Help?')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Your Email Address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('allows typing in the message field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const textarea = screen.getByPlaceholderText('How Can We Help?')
    await user.type(textarea, 'Hello there!')
    expect(textarea).toHaveValue('Hello there!')
  })

  it('shows thank you message after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('hides the form after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.queryByRole('heading', { name: /send us a message/i })).not.toBeInTheDocument()
  })

  it('allows resetting the form after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Send Us A Message')
  })

  it('clears email and message after reset', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Your Email Address'), 'test@test.com')
    await user.type(screen.getByPlaceholderText('How Can We Help?'), 'Hi!')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByPlaceholderText('Your Email Address')).toHaveValue('')
    expect(screen.getByPlaceholderText('How Can We Help?')).toHaveValue('')
  })

  it('shows success message text after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })
})
