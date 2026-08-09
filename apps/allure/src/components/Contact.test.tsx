import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the title, inputs, and submit button', () => {
    render(<Contact />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/contact us/i)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows a success state after submitting', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'Ava Johnson')
    await user.type(screen.getByLabelText('E-mail'), 'ava@example.com')
    await user.type(screen.getByLabelText('Message'), 'Booking inquiry')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument()
  })
})
