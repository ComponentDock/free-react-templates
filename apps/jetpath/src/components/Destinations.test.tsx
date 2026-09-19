import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders section heading and destination cards', () => {
    render(<Destinations />)
    expect(screen.getByText('Popular Destinations')).toBeInTheDocument()
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument()
  })

  it('shows tour counts', () => {
    render(<Destinations />)
    expect(screen.getByText('12 tours available')).toBeInTheDocument()
    expect(screen.getByText('8 tours available')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<Destinations />)
    expect(screen.getByAltText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByAltText('Swiss Alps')).toBeInTheDocument()
  })
})
