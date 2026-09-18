import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders four service cards', () => {
    render(<ServicesGrid />)
    const cards = screen.getAllByText('Special Care')
    expect(cards).toHaveLength(4)
  })

  it('renders images', () => {
    render(<ServicesGrid />)
    const images = screen.getAllByAltText('Special Care')
    expect(images).toHaveLength(4)
  })

  it('renders descriptions', () => {
    render(<ServicesGrid />)
    expect(screen.getByText(/Tailored care programs/)).toBeInTheDocument()
  })
})
