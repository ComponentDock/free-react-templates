import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders heading', () => {
    render(<ContactForm />)
    expect(
      screen.getByRole('heading', { level: 2, name: /free legal consultation/i }),
    ).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submitting empty form does not show confirmation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submitting empty form via fireEvent hits early return', () => {
    render(<ContactForm />)
    const form = screen.getByRole('button', { name: /send message/i }).closest('form')!
    fireEvent.submit(form)
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submitting partial form hits early return', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!)
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('filling all fields and submitting shows confirmation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Legal Help')
    await user.type(screen.getByPlaceholderText('Message'), 'I need assistance')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument()
  })

  it('renders map placeholder', () => {
    render(<ContactForm />)
    expect(screen.getByRole('img', { name: /map placeholder/i })).toBeInTheDocument()
  })
})
