import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading and contact info', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument()
    expect(screen.getByText(/123 Creative Street/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument()
    expect(screen.getByText(/info@artfulstudio.com/i)).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Name/i), 'John')
    await user.type(screen.getByLabelText(/Email/i), 'john@test.com')
    await user.type(screen.getByLabelText(/Message/i), 'Hello')
    expect(screen.getByLabelText(/Name/i)).toHaveValue('John')
    expect(screen.getByLabelText(/Email/i)).toHaveValue('john@test.com')
    expect(screen.getByLabelText(/Message/i)).toHaveValue('Hello')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Email/i), 'jane@test.com')
    await user.type(screen.getByLabelText(/Message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    // Form should still be rendered (no page navigation)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
  })
})
