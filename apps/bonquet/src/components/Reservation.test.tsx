import { render, screen } from '@testing-library/react'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the form heading', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 2, name: /book a table/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Reservation />)
    expect(screen.getByPlaceholderText('Number of guests')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone no.')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    // date and time inputs are native input elements
    expect(document.querySelector('input[type="date"]')).toBeInTheDocument()
    expect(document.querySelector('input[type="time"]')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Reservation />)
    expect(screen.getByRole('button', { name: 'Sent Request' })).toBeInTheDocument()
  })

  it('shows success message after submission', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Reservation />)

    await user.type(screen.getByPlaceholderText('Number of guests'), '4')
    await user.type(screen.getByPlaceholderText('Phone no.'), '1234567890')

    const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
    const timeInput = document.querySelector('input[type="time"]') as HTMLInputElement
    await user.type(dateInput, '2026-12-25')
    await user.type(timeInput, '19:00')

    await user.click(screen.getByRole('button', { name: 'Sent Request' }))

    expect(screen.getByRole('heading', { level: 2, name: /thank you/i })).toBeInTheDocument()
    expect(screen.getByText(/reservation request has been received/i)).toBeInTheDocument()
  })
})
