import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the section heading and all form fields', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 2, name: /reservation/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of persons/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reserve now/i })).toBeInTheDocument()
  })

  it('shows confirmation after submitting', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('button', { name: /reserve now/i }))
    expect(screen.getByText(/your reservation has been received/i)).toBeInTheDocument()
  })
})
