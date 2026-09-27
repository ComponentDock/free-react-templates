import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders heading and form', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('renders all form inputs', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject of the message')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your message here..')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })

  it('renders both office locations', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'London' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'New York' })).toBeInTheDocument()
    const addresses = screen.getAllByText(/203 Fake St/)
    expect(addresses.length).toBeGreaterThanOrEqual(2)
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const button = screen.getByRole('button', { name: /Send Message/ })
    await user.click(button)
    // Form should not navigate
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })
})
