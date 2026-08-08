import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, pitch, email input, and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { level: 2, name: 'Join the Club' })).toBeInTheDocument()
    expect(screen.getByText(/10% off/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(/5,000\+ coffee lovers/)).toBeInTheDocument()
  })

  it('shows a confirmation message and hides the form after subscribing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'coffee@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/You're on the list/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('keeps the form when the email is empty', () => {
    render(<Newsletter />)

    fireEvent.submit(screen.getByRole('form', { name: 'Newsletter signup' }))

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.queryByText(/You're on the list/)).not.toBeInTheDocument()
  })
})
