import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and schedule', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Welcome to Vitala Medical Center/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Doctors Time Table/i })).toBeInTheDocument()
  })

  it('renders the schedule slots', () => {
    render(<About />)
    expect(screen.getByText('Monday — Friday')).toBeInTheDocument()
    expect(screen.getByText('07.00 AM to 10.00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('renders bullet points', () => {
    render(<About />)
    expect(screen.getByText(/Compassionate care/)).toBeInTheDocument()
    expect(screen.getByText(/Board-certified physicians/)).toBeInTheDocument()
    expect(screen.getByText(/Patient-first approach/)).toBeInTheDocument()
  })
})
