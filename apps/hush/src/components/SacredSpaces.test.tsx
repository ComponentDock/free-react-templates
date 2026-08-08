import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SacredSpaces } from './SacredSpaces'

describe('SacredSpaces', () => {
  it('renders the heading and four space cards', () => {
    render(<SacredSpaces />)
    expect(
      screen.getByRole('heading', { level: 2, name: '80 Acres of Sanctuary' }),
    ).toBeInTheDocument()
    for (const title of ['The Chapel', 'The Labyrinth', 'Prayer Garden', 'Forest Trails']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('describes each space', () => {
    render(<SacredSpaces />)
    expect(screen.getByText(/stone chapel seating forty/)).toBeInTheDocument()
    expect(screen.getByText(/Chartres-style labyrinth/)).toBeInTheDocument()
  })
})
