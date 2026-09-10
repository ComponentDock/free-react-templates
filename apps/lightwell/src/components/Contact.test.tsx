import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and submit button', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Send Us Message' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits the form and clears all inputs', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello there!')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('')
  })
})
