import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: 'Weekly Newsletter' })).toBeInTheDocument()
    expect(screen.getByText(/There are many variations/i)).toBeInTheDocument()
  })

  it('renders the email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('subscribes with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thank you for subscribing/i)).toBeInTheDocument()
  })

  it('does not subscribe with whitespace-only email', async () => {
    const user = userEvent.setup()
    const { container } = render(<Newsletter />)

    // Type spaces — bypasses required but fails trim()
    await user.type(screen.getByLabelText('Email address'), '   ')

    // Submit the form directly via fireEvent to bypass native validation
    const form = container.querySelector('form')!
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.queryByText(/Thank you/i)).not.toBeInTheDocument()
  })
})
