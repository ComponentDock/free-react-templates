import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders heading and event cards', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()

    expect(screen.getByText('Free Training for Basic Programming')).toBeInTheDocument()
    expect(screen.getByText('1st Anniversary of Cognita')).toBeInTheDocument()
    expect(screen.getByText('Practice Workshop 2024')).toBeInTheDocument()
  })

  it('renders event descriptions', () => {
    render(<Events />)

    expect(screen.getByText(/introductory workshop/i)).toBeInTheDocument()
    expect(screen.getByText(/celebrate our first year/i)).toBeInTheDocument()
    expect(screen.getByText(/hands-on workshop/i)).toBeInTheDocument()
  })

  it('renders event images with alt text', () => {
    render(<Events />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    for (const img of images) {
      expect(img).toHaveAttribute('alt')
    }
  })
})
