import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading and intro text', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Get in Touch')
    expect(screen.getByText(/We'd love to hear from you/)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('First Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello there!')

    expect(screen.getByPlaceholderText('First Name')).toHaveValue('Jane')
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue('Doe')
    expect(screen.getByPlaceholderText('Email Address')).toHaveValue('jane@example.com')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('Hello there!')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('First Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Test message')

    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)

    expect(screen.getByPlaceholderText('First Name')).toHaveValue('Jane')
  })

  it('has accessible form labels via aria-label', () => {
    render(<App />)
    const form = screen.getByRole('form', { name: /contact form/i })
    expect(form).toBeInTheDocument()
  })
})
