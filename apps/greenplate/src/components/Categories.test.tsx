import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders Vegetables hero card', () => {
    render(<Categories />)
    const vegImages = screen.getAllByAltText('Vegetables')
    expect(vegImages.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Fruits, Juices, and Dried categories', () => {
    render(<Categories />)
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Juices')).toBeInTheDocument()
    expect(screen.getByText('Dried')).toBeInTheDocument()
  })

  it('renders a Vegetables small card', () => {
    render(<Categories />)
    const vegImages = screen.getAllByAltText('Vegetables')
    expect(vegImages.length).toBe(2)
  })
})
