import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the headline, copy, email input, and subscribe button', () => {
    render(<Subscribe />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Start 15 days free trial' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Train with full gym access/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('blocks an invalid email with a per-field error', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('blocks an empty email with a required error', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email')
  })

  it('shows a confirmation after a valid submit', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'fit@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/You are in!/)
    expect(screen.queryByRole('button', { name: 'Subscribe' })).not.toBeInTheDocument()
  })
})
