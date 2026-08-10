import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section of the Pump template', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /^Pump$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fuel Your Body Fitness')
    expect(screen.getByRole('heading', { level: 2, name: 'What We Do?' })).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Gym' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Coaches' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Workout Classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Membership Plans' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Successful Stories' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Book a Appointment' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
  })
})
