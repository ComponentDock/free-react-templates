import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NotifyButton } from './NotifyButton'

describe('NotifyButton', () => {
  it('renders a submit button with "Notify Us" text', () => {
    render(<NotifyButton />)

    const button = screen.getByRole('button', { name: /notify us/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('has a form landmark with accessible name', () => {
    render(<NotifyButton />)

    expect(screen.getByRole('form', { name: /notify signup/i })).toBeInTheDocument()
  })

  it('shows confirmation message after clicking the button', async () => {
    const user = userEvent.setup()
    render(<NotifyButton />)

    await user.click(screen.getByRole('button', { name: /notify us/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByRole('button', { name: /notify us/i })).not.toBeInTheDocument()
  })

  it('does not show confirmation before clicking', () => {
    render(<NotifyButton />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
