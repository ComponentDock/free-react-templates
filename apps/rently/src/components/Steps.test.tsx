import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Steps } from './Steps'

describe('Steps', () => {
  it('renders the section heading and all four steps', () => {
    render(<Steps />)
    expect(screen.getByRole('heading', { name: /Make your trip/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Better Way to Rent Your Perfect Cars/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Choose Your Pickup Location/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Select the Best Deal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Reserve Your Rental Car/i })).toBeInTheDocument()
  })

  it('renders the reserve CTA', () => {
    render(<Steps />)
    expect(screen.getByRole('button', { name: /Reserve Your Perfect Car/i })).toBeInTheDocument()
  })
})
