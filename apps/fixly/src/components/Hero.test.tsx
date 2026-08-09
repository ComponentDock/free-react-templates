import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide headline and both CTAs', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Looking for the Right Vehicle Repair Service/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Make An Appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /See Services/i })).toBeInTheDocument()
  })

  it('cycles to the second slide and back', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Best Auto Repair Shop and Maintenance Services/i,
      }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Looking for the Right Vehicle Repair Service/i,
      }),
    ).toBeInTheDocument()
  })

  it('wraps to the last slide when pressing previous on the first slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Best Auto Repair Shop and Maintenance Services/i,
      }),
    ).toBeInTheDocument()
  })
})
