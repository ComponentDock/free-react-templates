import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, and search form', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Rent a car is within/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Car Type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Pick up date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Drop off date/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Search Now' })).toHaveAttribute('href', '#listing')
  })

  it('renders all car type options in the select', () => {
    render(<Hero />)
    const select = screen.getByLabelText(/Select Car Type/i)
    expect(select.tagName).toBe('SELECT')
    expect(screen.getByText('SUV')).toBeInTheDocument()
    expect(screen.getByText('Sedan')).toBeInTheDocument()
    expect(screen.getByText('Hatchback')).toBeInTheDocument()
    expect(screen.getByText('Coupe')).toBeInTheDocument()
    expect(screen.getByText('Convertible')).toBeInTheDocument()
  })

  it('has a hero background image', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('drivego-hero') })
  })

  it('submits the form without navigating', () => {
    render(<Hero />)
    const form = screen.getByLabelText(/Select Car Type/i).closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })

  it('updates car type on select change', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const select = screen.getByLabelText(/Select Car Type/i)
    await user.selectOptions(select, 'Sedan')
    expect(select).toHaveValue('Sedan')
  })

  it('updates pickup and dropoff dates', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const pickup = screen.getByLabelText(/Pick up date/i)
    const dropoff = screen.getByLabelText(/Drop off date/i)
    await user.type(pickup, '2026-10-01')
    await user.type(dropoff, '2026-10-05')
    expect(pickup).toHaveValue('2026-10-01')
    expect(dropoff).toHaveValue('2026-10-05')
  })
})
