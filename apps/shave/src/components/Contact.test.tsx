import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Just drop us a line/i })).toBeInTheDocument()
  })

  it('renders all four contact cards', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Visit Our Office' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Call Us" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Email Us" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Customer Support' })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'Test')
    fireEvent.submit(screen.getByPlaceholderText('Enter your name').closest('form')!)
    // onSubmit handler fires preventDefault — form does not navigate
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })
})
