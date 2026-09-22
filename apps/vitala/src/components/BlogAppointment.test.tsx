import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogAppointment } from './BlogAppointment'

describe('BlogAppointment', () => {
  it('renders blog section heading', () => {
    render(<BlogAppointment />)
    expect(screen.getByRole('heading', { name: /Our Recent Blogs/i })).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<BlogAppointment />)
    expect(screen.getByText('Advances in Minimally Invasive Surgery')).toBeInTheDocument()
    expect(screen.getByText('Mental Health Awareness Month')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Tips for Heart Health')).toBeInTheDocument()
  })

  it('renders appointment form heading', () => {
    render(<BlogAppointment />)
    expect(screen.getByRole('heading', { name: /Make an Appointment/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<BlogAppointment />)
    expect(screen.getByPlaceholderText('Patient name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Date of birth')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /Doctor's name/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Appointment date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<BlogAppointment />)
    expect(screen.getByRole('button', { name: /Confirm Booking/i })).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<BlogAppointment />)
    const nameInput = screen.getByPlaceholderText('Patient name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('allows selecting a doctor', async () => {
    const user = userEvent.setup()
    render(<BlogAppointment />)
    const select = screen.getByRole('combobox', { name: /Doctor's name/i })
    await user.selectOptions(select, 'dr-davis')
    expect(select).toHaveValue('dr-davis')
  })
})
