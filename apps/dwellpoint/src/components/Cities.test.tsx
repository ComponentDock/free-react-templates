import { render, screen } from '@testing-library/react'

import { describe, it, expect } from 'vitest'
import { Cities } from './Cities'

describe('Cities', () => {
  it('renders section heading', () => {
    render(<Cities />)
    expect(screen.getByText('Demandable Cities')).toBeInTheDocument()
  })

  it('renders four cities', () => {
    render(<Cities />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
    expect(screen.getByText('Houston')).toBeInTheDocument()
  })

  it('renders city images', () => {
    render(<Cities />)
    const images = screen.getAllByRole('img')
    const cityImages = images.filter((img) => img.getAttribute('src')?.includes('dwellpoint-c'))
    expect(cityImages).toHaveLength(4)
  })

  it('renders Book Now buttons', () => {
    render(<Cities />)
    const buttons = screen.getAllByText('Book Now')
    expect(buttons).toHaveLength(4)
  })
})
