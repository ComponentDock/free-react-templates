import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedEvents } from './FeaturedEvents'

describe('FeaturedEvents', () => {
  it('renders all event cards', () => {
    render(<FeaturedEvents />)

    expect(screen.getByText('Michael Smith in concert')).toBeInTheDocument()
    expect(screen.getByText('Street art fest')).toBeInTheDocument()
    expect(screen.getByText('Anabelle in concert')).toBeInTheDocument()
    expect(screen.getByText("90's Disco Night")).toBeInTheDocument()
    expect(screen.getByText('Modern Ballet')).toBeInTheDocument()
    expect(screen.getByText('Smoke show')).toBeInTheDocument()
  })

  it('renders dates for titled events', () => {
    render(<FeaturedEvents />)

    expect(screen.getAllByText('August 25').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('November 28')).toBeInTheDocument()
    expect(screen.getAllByText('August 28').length).toBeGreaterThanOrEqual(1)
  })

  it('renders images for all events', () => {
    render(<FeaturedEvents />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(11)
  })
})
