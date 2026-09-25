import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedEvents } from './FeaturedEvents'

describe('FeaturedEvents', () => {
  it('renders the section heading', () => {
    render(<FeaturedEvents />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Events')
  })

  it('renders 3 event cards', () => {
    render(<FeaturedEvents />)
    const cards = screen.getAllByTestId('event-card')
    expect(cards).toHaveLength(3)
  })

  it('renders event titles', () => {
    render(<FeaturedEvents />)
    expect(screen.getByText('Slamp Party')).toBeInTheDocument()
    expect(screen.getByText('Love For My City')).toBeInTheDocument()
    expect(screen.getByText('Music Night Fest Party')).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<FeaturedEvents />)
    expect(screen.getByText('19')).toBeInTheDocument()
    expect(screen.getAllByText('Jun').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('Jul')).toBeInTheDocument()
  })

  it('renders Info links', () => {
    render(<FeaturedEvents />)
    const links = screen.getAllByRole('link', { name: 'Info' })
    expect(links).toHaveLength(3)
  })
})
