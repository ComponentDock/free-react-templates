import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows confirmation after submitting with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument()
  })

  it('does not submit if email is empty', async () => {
    render(<Newsletter />)
    // Use fireEvent.submit to bypass HTML5 constraint validation
    fireEvent.submit(screen.getByLabelText(/email address/i).closest('form')!)
    expect(screen.queryByText(/thank you for subscribing/i)).not.toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })
})
