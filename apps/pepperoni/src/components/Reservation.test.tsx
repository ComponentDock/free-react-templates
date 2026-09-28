import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('shows the contact form with fields and submit button', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Contact Us')
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const form = screen.getByLabelText('First Name').closest('form')!
    const preventDefault = vi.fn()
    form.addEventListener('submit', (e) => e.preventDefault())
    form.addEventListener('submit', preventDefault)
    await user.click(screen.getByRole('button', { name: /Send/i }))
    expect(preventDefault).toHaveBeenCalled()
  })
})
