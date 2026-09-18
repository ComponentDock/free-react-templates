import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Tours from './Tours'

describe('Tours', () => {
  it('renders tour dates heading', () => {
    render(<Tours />)
    expect(screen.getByText('Tour Dates')).toBeInTheDocument()
  })

  it('renders promotional card with year and title', () => {
    render(<Tours />)
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText('world tour')).toBeInTheDocument()
  })

  it('renders promotional card CTA button', () => {
    render(<Tours />)
    const promoButtons = screen.getAllByText('get your tickets')
    expect(promoButtons.length).toBeGreaterThan(0)
  })

  it('renders tour date items', () => {
    render(<Tours />)
    const tourItems = screen.getAllByTestId('tour-item')
    expect(tourItems).toHaveLength(4)
  })

  it('renders venue names', () => {
    render(<Tours />)
    expect(screen.getByText('The O2')).toBeInTheDocument()
    expect(screen.getByText('Madison Square Garden')).toBeInTheDocument()
  })

  it('renders see all tour dates link', () => {
    render(<Tours />)
    expect(screen.getByText('See All Tour Dates')).toBeInTheDocument()
  })
})
