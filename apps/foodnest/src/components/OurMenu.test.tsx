import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurMenu } from './OurMenu'

describe('OurMenu', () => {
  it('renders heading and menu items', () => {
    render(<OurMenu />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()

    expect(screen.getByText('Grilled Caesar salad, shaved reggiano')).toBeInTheDocument()
    expect(screen.getByText('Bacon wrapped wild gulf prawns')).toBeInTheDocument()
    expect(screen.getByText('Spicy Calamari and beans')).toBeInTheDocument()
    expect(screen.getByText('Seared ahi tuna fillet, honey-ginger sauce')).toBeInTheDocument()
  })

  it('displays prices in brand color', () => {
    render(<OurMenu />)

    const prices = screen.getAllByText(/^\$\d+\.\d{2}$/)
    expect(prices).toHaveLength(4)
  })
})
