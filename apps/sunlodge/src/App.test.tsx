import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Sunlodge').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('World Class Accommodation')
    expect(screen.getByText('View More')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getByText('Our Popular Rooms')).toBeInTheDocument()
    expect(screen.getByText('Hotel Preview')).toBeInTheDocument()
    expect(screen.getAllByText('Book A Room').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Beautiful Accommodation')).toBeInTheDocument()
    expect(screen.getByText('What Our Guests Say')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sunlodge — Hotel & Accommodation Template')
  })
})
