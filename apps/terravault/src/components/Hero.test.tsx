import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the property address', () => {
    render(<Hero />)
    expect(screen.getByText('9721 Glen Creek Ave. Ballston Spa, NY')).toBeInTheDocument()
  })

  it('renders the property name', () => {
    render(<Hero />)
    expect(screen.getByText('Villa 9721 Glen Creek')).toBeInTheDocument()
  })

  it('renders the price', () => {
    render(<Hero />)
    expect(screen.getByText('$3,000,000')).toBeInTheDocument()
  })

  it('renders property stats', () => {
    render(<Hero />)
    expect(screen.getByText(/5201 Sqft/)).toBeInTheDocument()
    expect(screen.getByText(/8 Bed/)).toBeInTheDocument()
    expect(screen.getByText(/7 Bath/)).toBeInTheDocument()
    expect(screen.getByText(/1 Garage/)).toBeInTheDocument()
  })

  it('renders thumbnail images', () => {
    render(<Hero />)
    const thumbnails = screen.getAllByAltText(/Property thumbnail/)
    expect(thumbnails).toHaveLength(3)
  })

  it('has a section with home id', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })
})
