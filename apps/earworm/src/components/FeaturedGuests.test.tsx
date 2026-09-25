import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedGuests } from './FeaturedGuests'

describe('FeaturedGuests', () => {
  it('renders the section heading', () => {
    render(<FeaturedGuests />)
    expect(screen.getByRole('heading', { name: 'Featured Guests' })).toBeInTheDocument()
  })

  it('shows all guest profiles', () => {
    render(<FeaturedGuests />)
    expect(screen.getByText('Alfred Day')).toBeInTheDocument()
    expect(screen.getByText('Producer')).toBeInTheDocument()
    expect(screen.getByText('Jayden White')).toBeInTheDocument()
    expect(screen.getByText('Drummer')).toBeInTheDocument()
    expect(screen.getByText('Vincent Reid')).toBeInTheDocument()
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument()
  })

  it('has guest images', () => {
    render(<FeaturedGuests />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
