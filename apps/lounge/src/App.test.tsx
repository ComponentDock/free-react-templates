import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    const loungeTexts = screen.getAllByText('Lounge')
    expect(loungeTexts.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Welcome to Lounge — your seaside retreat')).toBeInTheDocument()
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
    expect(screen.getByText('Our Amenities')).toBeInTheDocument()
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    expect(screen.getByText('Conference Centre')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Guests Says')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Our Events')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('More templates at')).toBeInTheDocument()
  })
})
