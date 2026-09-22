import { render, screen } from '@testing-library/react'
import { Events } from './Events'
import { EVENTS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upcoming Events')
  })

  it('renders all 3 event cards', () => {
    render(<Events />)
    for (const event of EVENTS) {
      expect(screen.getByText(event.title)).toBeInTheDocument()
      expect(screen.getByText(event.date)).toBeInTheDocument()
      expect(screen.getByText(event.description)).toBeInTheDocument()
    }
  })

  it('renders event images', () => {
    render(<Events />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(EVENTS.length)
  })
})
