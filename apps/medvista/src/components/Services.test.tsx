import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Emergency Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Qualified Doctors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Outdoors Checkup' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24 Hours Service' })).toBeInTheDocument()
  })

  it('renders the consultation form heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Free Consultation/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Services />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the appointment submit button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /Appointment/i })).toBeInTheDocument()
  })

  it('renders the service select', () => {
    render(<Services />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
