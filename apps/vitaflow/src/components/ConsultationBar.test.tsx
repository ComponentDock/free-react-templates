import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConsultationBar } from './ConsultationBar'

describe('ConsultationBar', () => {
  it('renders three columns', () => {
    render(<ConsultationBar />)
    expect(screen.getByText('Healthcare Services')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
    expect(screen.getByText('Find A Health Expert')).toBeInTheDocument()
  })

  it('renders form inputs', () => {
    render(<ConsultationBar />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument()
  })

  it('renders services select', () => {
    render(<ConsultationBar />)
    expect(screen.getByDisplayValue('Services')).toBeInTheDocument()
  })

  it('renders Appointment submit button', () => {
    render(<ConsultationBar />)
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<ConsultationBar />)
    const firstName = screen.getByPlaceholderText('First Name')
    await user.type(firstName, 'John')
    expect(firstName).toHaveValue('John')
  })

  it('renders See Services and Meet our health coach links', () => {
    render(<ConsultationBar />)
    expect(screen.getByText('See Services')).toBeInTheDocument()
    expect(screen.getByText('Meet our health coach')).toBeInTheDocument()
  })

  it('submits the consultation form', async () => {
    const user = userEvent.setup()
    render(<ConsultationBar />)
    const submitBtn = screen.getByText('Appointment')
    await user.click(submitBtn)
  })
})
