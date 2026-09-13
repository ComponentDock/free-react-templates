import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotelList } from './HotelList'

describe('HotelList', () => {
  it('renders section heading', () => {
    render(<HotelList />)
    expect(screen.getByText('Top Hotels & Restaurants')).toBeInTheDocument()
  })

  it('renders all three hotel cards', () => {
    render(<HotelList />)
    expect(screen.getByText('Grand Azure Resort')).toBeInTheDocument()
    expect(screen.getByText('Mountain Lodge')).toBeInTheDocument()
    expect(screen.getByText('Tokyo Garden Inn')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<HotelList />)
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.getByText('$380')).toBeInTheDocument()
    expect(screen.getByText('$420')).toBeInTheDocument()
  })

  it('renders locations', () => {
    render(<HotelList />)
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Banff, Canada')).toBeInTheDocument()
    expect(screen.getByText('Tokyo, Japan')).toBeInTheDocument()
  })
})
