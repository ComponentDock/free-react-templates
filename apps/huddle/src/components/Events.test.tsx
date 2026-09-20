import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders heading and all 3 event cards', () => {
    render(<Events />)
    expect(screen.getByText('Conference Events')).toBeInTheDocument()
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
    expect(screen.getByText('Workshop Series')).toBeInTheDocument()
    expect(screen.getByText('Closing Ceremony')).toBeInTheDocument()
  })

  it('renders event dates and descriptions', () => {
    render(<Events />)
    expect(screen.getByText('April 17, 2025')).toBeInTheDocument()
    expect(screen.getByText(/Kick off the conference/)).toBeInTheDocument()
  })

  it('renders event images', () => {
    render(<Events />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
