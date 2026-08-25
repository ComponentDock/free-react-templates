import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoCards } from './InfoCards'

describe('InfoCards', () => {
  it('renders all three info cards', () => {
    render(<InfoCards />)
    expect(screen.getByText('Easy Booking')).toBeInTheDocument()
    expect(screen.getByText('Team Dentist')).toBeInTheDocument()
    expect(screen.getByText('Best Price Guarantee')).toBeInTheDocument()
  })
})
