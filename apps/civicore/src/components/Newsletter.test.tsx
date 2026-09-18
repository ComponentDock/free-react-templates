import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /get job information daily/i })).toBeInTheDocument()
  })

  it('renders the email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('subscribes with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument()
  })

  it('does not subscribe with empty email', () => {
    render(<Newsletter />)
    const form = document.querySelector('form')!
    fireEvent.submit(form)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.queryByText(/thank you for subscribing/i)).not.toBeInTheDocument()
  })
})
