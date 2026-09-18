import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopDestinations } from './TopDestinations'

describe('TopDestinations', () => {
  it('renders heading and subtext', () => {
    render(<TopDestinations />)

    expect(screen.getByText('Top Destinations')).toBeInTheDocument()
    expect(screen.getByText(/Discover the most popular/)).toBeInTheDocument()
  })

  it('renders 6 destination cards', () => {
    render(<TopDestinations />)

    expect(screen.getByText('Rome, Italy')).toBeInTheDocument()
    expect(screen.getByText('Paris, France')).toBeInTheDocument()
    expect(screen.getByText('Tokyo, Japan')).toBeInTheDocument()
    expect(screen.getByText('Barcelona, Spain')).toBeInTheDocument()
    expect(screen.getByText('Sydney, Australia')).toBeInTheDocument()
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
  })

  it('renders Visit This Place text under each card', () => {
    render(<TopDestinations />)

    const visitLinks = screen.getAllByText('Visit This Place')
    expect(visitLinks).toHaveLength(6)
  })
})
