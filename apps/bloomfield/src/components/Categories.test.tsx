import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all four category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Fresh Flower')).toBeInTheDocument()
    expect(screen.getByText('Succulent plants')).toBeInTheDocument()
    expect(screen.getByText('Cactus plants')).toBeInTheDocument()
    expect(screen.getByText('Furniture tree')).toBeInTheDocument()
  })

  it('shows item counts', () => {
    render(<Categories />)
    expect(screen.getAllByText('( 25 items )').length).toBe(2)
    expect(screen.getByText('( 162 items )')).toBeInTheDocument()
    expect(screen.getByText('( 58 items )')).toBeInTheDocument()
  })

  it('links each category to shop', () => {
    render(<Categories />)
    const links = screen.getAllByRole('link')
    const shopLinks = links.filter((l) => l.getAttribute('href') === '#shop')
    expect(shopLinks.length).toBe(4)
  })
})
