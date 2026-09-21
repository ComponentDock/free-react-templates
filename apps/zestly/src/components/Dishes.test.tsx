import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dishes } from './Dishes'

describe('Dishes', () => {
  it('renders three dish cards with title and description', () => {
    render(<Dishes />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
    expect(headings[0]?.textContent).toBe('Birthday Catering')
    expect(headings[1]?.textContent).toBe('Corporate Events')
    expect(headings[2]?.textContent).toBe('Family Gatherings')

    expect(screen.getByText(/Custom birthday catering/)).toBeInTheDocument()
    expect(screen.getByText(/Professional catering/)).toBeInTheDocument()
    expect(screen.getByText(/Warm and hearty/)).toBeInTheDocument()
  })
})
