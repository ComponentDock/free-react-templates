import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Restaurant } from './Restaurant'

describe('Restaurant', () => {
  it('renders the section heading', () => {
    render(<Restaurant />)
    expect(screen.getByRole('heading', { name: 'Restaurant' })).toBeInTheDocument()
  })

  it('renders all four menu items', () => {
    render(<Restaurant />)
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
    expect(screen.getByText('Filet Mignon')).toBeInTheDocument()
    expect(screen.getByText('Lobster Risotto')).toBeInTheDocument()
    expect(screen.getByText('Mediterranean Salad')).toBeInTheDocument()
  })

  it('shows prices for each item', () => {
    render(<Restaurant />)
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$38')).toBeInTheDocument()
    expect(screen.getByText('$18')).toBeInTheDocument()
  })

  it('has food images with alt text', () => {
    render(<Restaurant />)
    expect(screen.getByRole('img', { name: 'Grilled Salmon' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Filet Mignon' })).toBeInTheDocument()
  })
})
