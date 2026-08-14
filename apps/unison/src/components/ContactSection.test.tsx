import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders the three contact info columns with icons', () => {
    render(<ContactSection />)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+1 232 3235 324')).toBeInTheDocument()
    expect(screen.getByText('youremail@domain.com')).toBeInTheDocument()
  })

  it('shows inline errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(5)
    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('clears a field error as the user types', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email'), 'a@b.co')
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('shows a success message on a valid submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Partnership')
    await user.type(screen.getByLabelText('Message'), 'Hello from the test suite!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for your message/)
  })
})
