import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Class inquiry')
    await user.type(screen.getByLabelText('Message'), 'Hello, interested in yoga classes.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText(/Your message has been received/)).toBeInTheDocument()
  })

  it('does not submit if fields are empty via HTML validation', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const button = screen.getByRole('button', { name: 'Send Message' })
    await user.click(button)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('does not set submitted when handleSubmit called with partial data', () => {
    render(<Contact />)
    const form = document.querySelector('form')!
    // fireEvent bypasses HTML required validation
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Jane' } })
    fireEvent.submit(form)
    // Still shows form (not submitted)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })
})
