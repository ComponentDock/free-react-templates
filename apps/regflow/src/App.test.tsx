import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the form heading and description', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/contact us/i)
    expect(screen.getByText(/we love hearing from you/i)).toBeInTheDocument()
  })

  it('renders three form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice')
    await user.type(screen.getByLabelText('Your Mail'), 'alice@test.com')
    await user.type(screen.getByLabelText('Your Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/your message has been received/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Regflow — Registration Form Template')
  })

  it('accepts user input in all fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nameInput = screen.getByLabelText('Your Name')
    await user.type(nameInput, 'Bob')
    expect(nameInput).toHaveValue('Bob')

    const emailInput = screen.getByLabelText('Your Mail')
    await user.type(emailInput, 'bob@test.com')
    expect(emailInput).toHaveValue('bob@test.com')

    const messageInput = screen.getByLabelText('Your Message')
    await user.type(messageInput, 'Test message')
    expect(messageInput).toHaveValue('Test message')
  })
})
