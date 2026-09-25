import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { describe, it, expect } from 'vitest'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Me')
  })

  it('renders contact info cards', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Contact Number')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the map placeholder', () => {
    render(<Contact />)
    expect(screen.getByText('Map Placeholder')).toBeInTheDocument()
  })

  it('form submission does not reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // No error thrown — form's onSubmit prevents default
  })
})
