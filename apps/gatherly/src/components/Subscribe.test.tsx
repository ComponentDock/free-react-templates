import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Subscribe } from './Subscribe'
import { subscribe } from '../data'

describe('Subscribe', () => {
  it('renders the heading, email input and Subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('heading', { name: subscribe.heading })).toBeInTheDocument()
    expect(screen.getByLabelText(subscribe.placeholder)).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: subscribe.submitLabel })).toBeInTheDocument()
  })

  it('rejects an empty or invalid email with an inline error', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    await user.click(screen.getByRole('button', { name: subscribe.submitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribe.error)

    await user.type(screen.getByLabelText(subscribe.placeholder), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribe.submitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribe.error)
  })

  it('shows a success message for a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText(subscribe.placeholder)
    await user.type(input, 'attendee@example.com')
    await user.click(screen.getByRole('button', { name: subscribe.submitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribe.success)
    expect(input).toHaveValue('')
  })
})
