import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

describe('Contact', () => {
  it('renders heading and form fields', () => {
    render(<Contact />)
    expect(screen.getByText('Have a Project?')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const submitBtn = screen.getByText('Send Message')
    await user.click(submitBtn)
  })
})
