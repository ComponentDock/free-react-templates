import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the form heading and fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /get a quote/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Select Topic')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows confirmation after submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.selectOptions(screen.getByDisplayValue('Select Topic'), 'residential')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('renders the contact image', () => {
    render(<Contact />)
    expect(screen.getByAltText(/contact skylens/i)).toBeInTheDocument()
  })
})
