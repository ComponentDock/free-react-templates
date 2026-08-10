import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the gold band with heading, blurb, input and button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: 'Newsletter - Stay tune and get the latest update' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      'Enter email address',
    )
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a successful subscription and hides the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
