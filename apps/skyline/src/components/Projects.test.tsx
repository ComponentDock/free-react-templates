import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and property cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByRole('img', { name: /property/i }).length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByText(/Apartment/i).length).toBeGreaterThanOrEqual(3)
  })
})
