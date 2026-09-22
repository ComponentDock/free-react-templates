import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the Events heading', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Events')
  })

  it('renders 3 event cards', () => {
    render(<Events />)

    expect(screen.getByText('Summer Gala Dinner')).toBeInTheDocument()
    expect(screen.getByText('Wine Tasting Night')).toBeInTheDocument()
    expect(screen.getByText(/New Year/)).toBeInTheDocument()
  })

  it('displays dates for each event', () => {
    render(<Events />)

    expect(screen.getByText('August 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('December 31, 2026')).toBeInTheDocument()
  })

  it('renders event images', () => {
    render(<Events />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
