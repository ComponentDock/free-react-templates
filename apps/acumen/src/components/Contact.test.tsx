import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('shows all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('has Send Now button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Now' })).toBeInTheDocument()
  })

  it('shows address info', () => {
    render(<Contact />)
    expect(screen.getByText('160 Link Road, Dhaka-1216')).toBeInTheDocument()
    expect(screen.getByText('+880 1712 345 678')).toBeInTheDocument()
    expect(screen.getByText('info@acumen.com')).toBeInTheDocument()
  })

  it('submits the form successfully', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Now' }))
    expect(screen.getByText('Thank you! Your message has been sent.')).toBeInTheDocument()
  })

  it('does not submit with empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Now' }))
    expect(screen.queryByText('Thank you! Your message has been sent.')).not.toBeInTheDocument()
  })
})
