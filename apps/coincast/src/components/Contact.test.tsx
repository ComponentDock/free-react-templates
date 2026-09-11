import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the form heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Request A Call Back')
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders Submit Now button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Submit Now/i })).toBeInTheDocument()
  })

  it('shows thank you message on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /Submit Now/i }))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument()
  })
})
