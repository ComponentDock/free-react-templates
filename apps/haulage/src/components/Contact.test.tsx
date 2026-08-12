import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, contact info and the Get In Touch form', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()
    /* The source's info card is plain label + value text (no links). */
    expect(screen.getByText('34 Street Name, City Name Here, United States')).toBeInTheDocument()
    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '+1 242 4942 290' })).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows per-field errors and does not submit when fields are missing or invalid', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your last name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(screen.getByText('Please write a message')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('clears a field error while the user types', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Ada' } })
    expect(screen.queryByText('Please enter your first name')).not.toBeInTheDocument()
  })

  it('submits a valid form and shows a success message', () => {
    render(<Contact />)

    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Lovelace' } })
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello there' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks, Ada! Your message has been sent.')
  })
})
