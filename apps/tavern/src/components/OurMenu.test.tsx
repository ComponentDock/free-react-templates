import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { OurMenu } from './OurMenu'

describe('OurMenu', () => {
  it('renders section heading', () => {
    render(<OurMenu />)
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
  })

  it('renders all menu item names', () => {
    render(<OurMenu />)
    expect(screen.getByText('Grilled Caesar salad, shaved reggiano')).toBeInTheDocument()
    expect(screen.getByText('Spicy Calamari and beans')).toBeInTheDocument()
    expect(screen.getByText('Bacon wrapped wild gulf prawns')).toBeInTheDocument()
    expect(screen.getByText('Seared ahi tuna fillet*, honey-ginger sauce')).toBeInTheDocument()
  })

  it('renders menu item prices', () => {
    render(<OurMenu />)
    expect(screen.getAllByText('$12.00').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$18.00')).toBeInTheDocument()
    expect(screen.getByText('$16.00')).toBeInTheDocument()
  })

  it('renders menu item descriptions', () => {
    render(<OurMenu />)
    expect(screen.getByText(/Crisp romaine/)).toBeInTheDocument()
    expect(screen.getByText(/Tender calamari/)).toBeInTheDocument()
  })
})
