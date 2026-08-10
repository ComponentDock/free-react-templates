import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the Contact Us heading', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders the agency contact details', () => {
    render(<Appointment />)

    expect(
      screen.getByText(/198 West 21th Street, Suite 721, New York NY 10016/),
    ).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders the Become A Model and Model Courses blocks', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { level: 3, name: 'Become A Model?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Model Courses' })).toBeInTheDocument()
  })

  it('renders the appointment band on the dark background', () => {
    const { container } = render(<Appointment />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-night')
  })
})
