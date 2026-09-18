import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the section heading', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { name: /Book A Table/i })).toBeInTheDocument()
    expect(screen.getByText(/Reservation/i)).toBeInTheDocument()
  })

  it('renders the form fields', () => {
    render(<Reservation />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/persons/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your note/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book a table/i })).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('button', { name: /book a table/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('submits successfully with a valid email', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByLabelText(/email address/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /book a table/i }))
    expect(screen.getByText(/reservation request has been received/i)).toBeInTheDocument()
  })

  it('allows changing the guests select', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const select = screen.getByLabelText(/persons/i)
    await user.selectOptions(select, '3 Guests')
    expect(select).toHaveValue('3 Guests')
  })

  it('allows changing the time select', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const select = screen.getByLabelText(/time/i)
    await user.selectOptions(select, '6 PM to 8 PM')
    expect(select).toHaveValue('6 PM to 8 PM')
  })

  it('allows typing in the notes textarea', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const textarea = screen.getByLabelText(/your note/i)
    await user.type(textarea, 'Window seat please')
    expect(textarea).toHaveValue('Window seat please')
  })
})
