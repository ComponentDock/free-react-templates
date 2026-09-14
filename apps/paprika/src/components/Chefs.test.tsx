import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Chefs } from './Chefs'

describe('Chefs', () => {
  it('renders section heading', () => {
    render(<Chefs />)
    expect(screen.getByRole('heading', { name: 'Our Chefs' })).toBeInTheDocument()
  })

  it('renders at least 4 chef cards', () => {
    render(<Chefs />)
    const chefs = ['Suzanne Goin', 'Thomas Keller', 'Paul Bocuse', 'Giada De Laurentiis']
    for (const chef of chefs) {
      expect(screen.getAllByText(chef).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('displays role for each chef', () => {
    render(<Chefs />)
    expect(screen.getAllByText('Head Chef').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Executive Chef').length).toBeGreaterThanOrEqual(1)
  })
})
