import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders heading and contact cards', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Contact Number')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('changes button text on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Message Sent!')).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Contact />)
    expect(screen.getByRole('region', { name: 'Contact' })).toBeInTheDocument()
  })
})
