import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('clears the error while the user keeps typing', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(input, 'reader@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('confirms a successful subscription and unmounts the input', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)
    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
