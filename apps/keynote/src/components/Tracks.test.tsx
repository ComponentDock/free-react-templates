import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tracks } from './Tracks'

describe('Tracks', () => {
  it('renders the heading and the three track cards', () => {
    render(<Tracks />)
    expect(screen.getByRole('heading', { name: /Three Distinct Paths/i })).toBeInTheDocument()
    for (const title of ['Research', 'Industry', 'Hands-on Labs']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Frontier science from the labs/i)).toBeInTheDocument()
    expect(screen.getByText(/Production war stories/i)).toBeInTheDocument()
    expect(screen.getByText(/Bring your laptop/i)).toBeInTheDocument()
  })
})
