import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

function submitForm() {
  fireEvent.submit(screen.getByRole('button', { name: /send message/i }))
}

describe('Footer', () => {
  it('renders contact info with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Yoga Lane/)).toBeInTheDocument()
    expect(screen.getByText(/\(555\) 123-4567/)).toBeInTheDocument()
    expect(screen.getByText(/info@pranayama\.com/)).toBeInTheDocument()
  })

  it('renders social links for Facebook, Instagram, and Twitter', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows error for invalid email', () => {
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText(/your email/i)
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } })
    submitForm()
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
  })

  it('shows success message for valid email', () => {
    render(<Footer />)
    fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByPlaceholderText(/your email/i), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText(/your message/i), { target: { value: 'Hello!' } })
    submitForm()
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('clears form fields after successful submission', () => {
    render(<Footer />)
    const nameInput = screen.getByPlaceholderText(/your name/i)
    const emailInput = screen.getByPlaceholderText(/your email/i)
    const messageInput = screen.getByPlaceholderText(/your message/i)
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } })
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello!' } })
    submitForm()
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('renders contact form fields', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})
