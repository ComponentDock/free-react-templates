import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, quick links, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Rouge/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the appointment form with all fields', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Make an appointment' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Service you need')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('validates the appointment form and confirms on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your E-mail'), 'jane@example.com')
    await user.type(screen.getByLabelText('Service you need'), 'Hair Dressing')
    await user.type(screen.getByLabelText('Your Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByRole('status')).toHaveTextContent(/request has been received/i)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
