import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and discount subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /book a car today/i })).toBeInTheDocument()
    expect(screen.getByText(/for as low as \$10 a day plus 15% discount/i)).toBeInTheDocument()
  })

  it('renders the booking form fields with labels and options', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/pick-up location/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pick-up date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/return date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/choose car type/i)).toBeInTheDocument()

    const location = screen.getByLabelText(/pick-up location/i)
    const options = within(location)
      .getAllByRole('option')
      .map((o) => o.textContent)
    expect(options).toEqual(['Select', 'Dhaka', 'Comilla', 'Barishal', 'Rangpur'])

    const carType = screen.getByLabelText(/choose car type/i)
    const carOptions = within(carType)
      .getAllByRole('option')
      .map((o) => o.textContent)
    expect(carOptions).toEqual(['Select', 'BMW', 'Audi', 'Lexus'])
  })

  it('submits the booking form without navigation', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.selectOptions(screen.getByLabelText(/pick-up location/i), 'Dhaka')
    await user.click(screen.getByRole('button', { name: /book now/i }))
    expect(screen.getByRole('form', { name: 'Book a car' })).toBeInTheDocument()
  })
})
