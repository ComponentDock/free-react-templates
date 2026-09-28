import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the section heading', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Make Reservation')
  })

  it('renders all form fields', () => {
    render(<Reservation />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select date & time')).toBeInTheDocument()
  })

  it('renders the event select dropdown', () => {
    render(<Reservation />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /dinner/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /lunch/i })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Reservation />)
    expect(screen.getByRole('button', { name: /make reservation/i })).toBeInTheDocument()
  })

  it('shows confirmation after submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Phone Number'), '555-0123')
    await user.type(screen.getByPlaceholderText('Select date & time'), '2026-10-01 7pm')
    await user.selectOptions(screen.getByRole('combobox'), 'dinner')
    await user.click(screen.getByRole('button', { name: /make reservation/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })
})
