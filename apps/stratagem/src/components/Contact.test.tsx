import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Get Free Quote' })).toBeInTheDocument()
  })

  it('renders name, email, and message fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<Contact />)
    expect(screen.getByRole('img', { name: /Contact illustration/i })).toBeInTheDocument()
  })

  it('does not submit with empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('heading', { name: 'Get Free Quote' })).toBeInTheDocument()
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'John Doe')
    await user.type(screen.getByLabelText('Your Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByText(/Thank you.*get back to you/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
  })
})
