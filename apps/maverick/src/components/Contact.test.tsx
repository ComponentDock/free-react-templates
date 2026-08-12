import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and the four info boxes', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
    for (const title of ['Address', 'Contact Number', 'Email Address', 'Website']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
  })

  it('shows per-field errors when submitting empty values', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a subject')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message')).toBeInTheDocument()
  })

  it('rejects an invalid email', () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText('Your Email'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Alex' } })
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Inquiry' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('swaps to a success message on a valid submit', () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Alex Maverick' } })
    fireEvent.change(screen.getByLabelText('Your Email'), {
      target: { value: 'alex@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Project inquiry' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello there' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thank you! Your message has been sent.')
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
  })
})
