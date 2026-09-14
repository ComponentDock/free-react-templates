import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders form and contact info', () => {
    render(<Contact />)
    expect(screen.getByText(/Send a Message/)).toBeInTheDocument()
    expect(screen.getByText('123 Publishing Lane, Bookville, BK 12345')).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByText('info@pressline.dev')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('clears form on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'Test Name')
    await user.type(screen.getByPlaceholderText('Your Email'), 'test@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Test message')
    await user.click(screen.getByText('Send Message'))
    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('')
  })
})
