import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading with a subtitle', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'We Have All Famous Barbers' })).toBeInTheDocument()
    expect(screen.getByText(/award-winning barbers/i)).toBeInTheDocument()
  })

  it('shows three barber cards with names and uppercase roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Peter Baker' })).toBeInTheDocument()
    expect(screen.getByText('Head Hair Cut Specialist')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nancy Holmes' })).toBeInTheDocument()
    expect(screen.getByText('Spa & Makeup Specialist')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Gavin Hansen' })).toBeInTheDocument()
    expect(screen.getByText('Hair Styling Expert')).toBeInTheDocument()
  })
})
