import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading, copy, email input, and submit button', () => {
    render(<Subscribe />)
    expect(
      screen.getByRole('heading', { level: 2, name: /subcribe to our upcoming match/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a success message on a valid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    await user.type(screen.getByLabelText('Email address'), 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/you're on the list/i)
  })

  it('shows a validation error for an invalid email and clears it on typing', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.type(screen.getByLabelText('Email address'), '@fan.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
