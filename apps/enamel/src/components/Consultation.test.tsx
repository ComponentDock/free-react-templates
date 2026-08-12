import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Consultation } from './Consultation'

describe('Consultation', () => {
  it('shows the three blue band columns with teasers and links', () => {
    render(<Consultation />)

    expect(screen.getByRole('heading', { name: 'Dental Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Free Consultation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Find A Doctor' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Meet our doctor' })).toBeInTheDocument()
  })

  it('renders the appointment form fields and department options', () => {
    render(<Consultation />)

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()

    const select = screen.getByLabelText('Department')
    expect(select).toHaveValue('Dental')
    for (const option of ['Neurology', 'Cardiology', 'Dental', 'Ophthalmology', 'Other Services']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
  })

  it('submits the form and shows a success status', async () => {
    const user = userEvent.setup()
    render(<Consultation />)

    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.selectOptions(screen.getByLabelText('Department'), 'Cardiology')
    await user.type(screen.getByLabelText('Date'), '12/25/2026')
    await user.type(screen.getByLabelText('Time'), '10:30am')

    await user.click(screen.getByRole('button', { name: 'Appointment' }))

    expect(screen.getByRole('status')).toHaveTextContent('Appointment requested')
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()
  })
})
