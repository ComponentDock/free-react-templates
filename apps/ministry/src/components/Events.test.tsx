import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Latest Events')).toBeInTheDocument()
  })

  it('renders three events', () => {
    render(<Events />)
    expect(screen.getByText('Giving Hope to Our Spiritual Needs')).toBeInTheDocument()
    expect(screen.getByText('Community Prayer and Worship Night')).toBeInTheDocument()
    expect(screen.getByText('Youth Conference 2029')).toBeInTheDocument()
  })

  it('renders More Details buttons', () => {
    render(<Events />)
    const btns = screen.getAllByText('More Details')
    expect(btns.length).toBe(3)
  })

  it('renders event images', () => {
    render(<Events />)
    const imgs = screen.getAllByRole('img') as HTMLImageElement[]
    const eventImgs = imgs.filter(
      (img) =>
        img.alt === 'Giving Hope to Our Spiritual Needs' ||
        img.alt === 'Community Prayer and Worship Night' ||
        img.alt === 'Youth Conference 2029',
    )
    expect(eventImgs.length).toBe(3)
  })

  it('renders event details', () => {
    render(<Events />)
    expect(screen.getByText(/Monday, 8:00 Am/)).toBeInTheDocument()
    expect(screen.getAllByText('Ministry Church').length).toBeGreaterThanOrEqual(1)
  })
})
