import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders contact info items', () => {
    render(<Contact />)
    expect(screen.getByText('info@domain.com')).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
  })

  it('renders contact form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    expect(screen.getByLabelText('Your message')).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('form submission prevents default', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByText('Send Message'))
    // Form should not navigate or cause errors
  })
})
