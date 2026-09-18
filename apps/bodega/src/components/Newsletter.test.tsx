import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and form', () => {
    render(<Newsletter />)
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows success message on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('does not submit with empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('does not submit with whitespace-only email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), '   ')
    // Use fireEvent to bypass HTML required validation
    fireEvent.submit(screen.getByRole('button', { name: 'Subscribe' }))
    // Form stays because email.trim() is empty
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('has proper aria label', async () => {
    render(<Newsletter />)
    expect(screen.getByRole('region', { name: 'Newsletter subscription' })).toBeInTheDocument()
  })
})
