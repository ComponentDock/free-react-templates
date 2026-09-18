import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularTrips } from './PopularTrips'

describe('PopularTrips', () => {
  it('renders the section heading', () => {
    render(<PopularTrips />)

    expect(screen.getByRole('heading', { level: 2, name: 'Popular Trips' })).toBeInTheDocument()
  })

  it('renders 3 trip cards with names, durations, prices, and book buttons', () => {
    render(<PopularTrips />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)

    expect(screen.getByText('Island Hopping Adventure')).toBeInTheDocument()
    expect(screen.getByText('7 Days')).toBeInTheDocument()
    expect(screen.getByText('$1,299')).toBeInTheDocument()

    expect(screen.getByText('Cultural Heritage Tour')).toBeInTheDocument()
    expect(screen.getByText('10 Days')).toBeInTheDocument()
    expect(screen.getByText('$1,899')).toBeInTheDocument()

    expect(screen.getByText('Mountain Expedition')).toBeInTheDocument()
    expect(screen.getByText('5 Days')).toBeInTheDocument()
    expect(screen.getByText('$899')).toBeInTheDocument()

    const bookButtons = screen.getAllByRole('button', { name: 'Book Now' })
    expect(bookButtons).toHaveLength(3)
  })
})
