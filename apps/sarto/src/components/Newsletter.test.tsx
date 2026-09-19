import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and subtext', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: 'Subscribe for Our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/won't send any kind of spam/)).toBeInTheDocument()
  })

  it('renders the email input and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('does not show confirmation when submitting empty email', () => {
    render(<Newsletter />)
    const form = document.querySelector('form')!
    fireEvent.submit(form)
    expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
  })

  it('shows confirmation after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
    expect(input).not.toBeInTheDocument()
  })
})
