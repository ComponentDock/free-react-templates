import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, message form fields, and newsletter signup', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact US' })).toBeInTheDocument()

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('clears the newsletter input after signing up', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const input = screen.getByLabelText('Newsletter email')
    await user.type(input, 'hello@appson.com')
    expect(input).toHaveValue('hello@appson.com')

    await user.click(screen.getByRole('button', { name: 'Sign Up' }))
    expect(input).toHaveValue('')
  })
})
