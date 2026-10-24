import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pillars } from './Pillars'

describe('Pillars', () => {
  it('renders the three transport pillars with their copy', () => {
    render(<Pillars />)
    expect(screen.getByRole('heading', { name: 'Transportation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Live Monitoring' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Worldwide Service' })).toBeInTheDocument()
    expect(screen.getAllByText(/esteem spirit temper too say adieus/i)).toHaveLength(3)
  })
})
