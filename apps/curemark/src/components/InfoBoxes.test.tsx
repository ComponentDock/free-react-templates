import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { InfoBoxes } from './InfoBoxes'

describe('InfoBoxes', () => {
  it('renders the Opening Hours section', () => {
    render(<InfoBoxes />)
    expect(screen.getByRole('heading', { name: /opening hours/i })).toBeInTheDocument()
    expect(screen.getByText('Monday — Thursday')).toBeInTheDocument()
    expect(screen.getByText('Friday')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('displays correct schedule hours', () => {
    render(<InfoBoxes />)
    expect(screen.getByText('08:00 - 19:00')).toBeInTheDocument()
    expect(screen.getByText('08:00 - 18:30')).toBeInTheDocument()
    expect(screen.getByText('09:30 - 17:00')).toBeInTheDocument()
    expect(screen.getByText('09:30 - 15:00')).toBeInTheDocument()
  })

  it('renders the Emergency section with CTA button', () => {
    render(<InfoBoxes />)
    expect(screen.getByRole('heading', { name: /emergency/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /call emergency/i })).toBeInTheDocument()
  })

  it('renders the Make an Appointment form', () => {
    render(<InfoBoxes />)
    expect(screen.getByRole('heading', { name: /make an appointment/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/department/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/doctor/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('allows selecting department and doctor', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)

    await user.selectOptions(screen.getByLabelText(/department/i), 'Cardiology')
    expect(screen.getByLabelText(/department/i)).toHaveValue('Cardiology')

    await user.selectOptions(screen.getByLabelText(/doctor/i), 'Dr. Smith')
    expect(screen.getByLabelText(/doctor/i)).toHaveValue('Dr. Smith')
  })

  it('allows typing in name and phone fields', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)

    await user.type(screen.getByLabelText(/your name/i), 'John Doe')
    expect(screen.getByLabelText(/your name/i)).toHaveValue('John Doe')

    await user.type(screen.getByLabelText(/phone number/i), '555-1234')
    expect(screen.getByLabelText(/phone number/i)).toHaveValue('555-1234')
  })

  it('shows confirmation after form submission', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)

    await user.click(screen.getByRole('button', { name: /make an appointment/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
  })

  it('has proper aria-label', () => {
    render(<InfoBoxes />)
    expect(screen.getByRole('region', { name: /information boxes/i })).toBeInTheDocument()
  })
})
