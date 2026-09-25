import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders contact form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders address and contact info', () => {
    render(<Contact />)
    expect(screen.getByText('121 Street, Melbourne Victoria')).toBeInTheDocument()
    expect(screen.getByText('90 987 65 44')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    await user.click(submitBtn)
    // Form submits without error
  })
})
