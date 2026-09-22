import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Restaurant } from './Restaurant'

describe('Restaurant', () => {
  it('renders the Restaurant heading', () => {
    render(<Restaurant />)
    expect(screen.getByText('Restaurant')).toBeDefined()
  })

  it('renders the Our Menu subheading', () => {
    render(<Restaurant />)
    expect(screen.getByText('Our Menu')).toBeDefined()
  })

  it('renders all menu items', () => {
    render(<Restaurant />)
    expect(screen.getByText('Grilled Salmon')).toBeDefined()
    expect(screen.getByText('Filet Mignon')).toBeDefined()
    expect(screen.getByText('Lobster Risotto')).toBeDefined()
    expect(screen.getByText('Tiramisu')).toBeDefined()
  })

  it('renders all menu prices', () => {
    render(<Restaurant />)
    expect(screen.getByText('$28')).toBeDefined()
    expect(screen.getByText('$45')).toBeDefined()
    expect(screen.getByText('$38')).toBeDefined()
    expect(screen.getByText('$14')).toBeDefined()
  })

  it('renders menu item descriptions', () => {
    render(<Restaurant />)
    expect(screen.getByText(/Fresh Atlantic salmon/)).toBeDefined()
    expect(screen.getByText(/Prime beef tenderloin/)).toBeDefined()
  })

  it('renders menu item images', () => {
    render(<Restaurant />)
    expect(screen.getByAltText('Grilled Salmon')).toBeDefined()
    expect(screen.getByAltText('Filet Mignon')).toBeDefined()
  })
})
