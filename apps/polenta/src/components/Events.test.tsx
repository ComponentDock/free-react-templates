import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section header', () => {
    render(<Events />)
    expect(screen.getByText('Special Event')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders 4 event cards', () => {
    render(<Events />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders event titles', () => {
    render(<Events />)
    expect(screen.getByText('Wine & Dine Evening')).toBeInTheDocument()
    expect(screen.getByText('Italian Cooking Class')).toBeInTheDocument()
    expect(screen.getByText('Live Jazz Night')).toBeInTheDocument()
    expect(screen.getByText('Harvest Festival Dinner')).toBeInTheDocument()
  })

  it('renders event times', () => {
    render(<Events />)
    expect(screen.getByText('7:00 PM – 10:00 PM')).toBeInTheDocument()
    expect(screen.getByText('6:00 PM – 9:00 PM')).toBeInTheDocument()
  })

  it('renders event descriptions', () => {
    render(<Events />)
    expect(screen.getByText(/Join us for an exclusive evening/)).toBeInTheDocument()
  })

  it('renders event images', () => {
    render(<Events />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
