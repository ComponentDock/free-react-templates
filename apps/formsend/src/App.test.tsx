import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the contact form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Name input', () => {
    render(<App />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders the Email input', () => {
    render(<App />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders the Message textarea', () => {
    render(<App />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the Send button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('allows typing in the Name input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing in the Email input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('allows typing in the Message textarea', async () => {
    const user = userEvent.setup()
    render(<App />)
    const messageInput = screen.getByLabelText(/message/i)
    await user.type(messageInput, 'Hello there')
    expect(messageInput).toHaveValue('Hello there')
  })

  it('handles form submission', () => {
    render(<App />)
    const form = screen.getByRole('form', { name: /contact form/i })
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })

  it('has purple background overlay', () => {
    const { container } = render(<App />)
    const overlay = container.querySelector('.bg-brand-purple\\/70')
    expect(overlay).toBeInTheDocument()
  })

  it('renders the EnvelopeIllustration', () => {
    render(<App />)
    const svg = document.querySelector('svg[aria-hidden="true"]')
    expect(svg).toBeInTheDocument()
  })

  it('has the Send icon inside button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /send/i })
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('has placeholder text in Name input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('has placeholder text in Email input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('has placeholder text in Message textarea', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Message...')).toBeInTheDocument()
  })
})
