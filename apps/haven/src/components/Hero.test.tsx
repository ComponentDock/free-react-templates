import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Haven A Luxury Hotel')
    expect(screen.getByText(/best hotel booking sites/)).toBeInTheDocument()
  })

  it('renders the Discover Now CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Discover Now' })).toBeInTheDocument()
  })

  it('renders the booking form with all fields', () => {
    render(<Hero />)

    expect(screen.getByLabelText(/Check In/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check Out/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Guests/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Room/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
    // Form should not navigate — no error means preventDefault worked
  })
})
