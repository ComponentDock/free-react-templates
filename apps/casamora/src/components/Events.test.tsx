import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the events heading', () => {
    render(<Events />)
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders all event cards', () => {
    render(<Events />)
    expect(screen.getByText('Summer Gala Night')).toBeInTheDocument()
    expect(screen.getByText('Wine & Dine Evening')).toBeInTheDocument()
    expect(screen.getByText('Beach Party')).toBeInTheDocument()
  })

  it('renders event dates', () => {
    render(<Events />)
    const dates = screen.getAllByText('February 26, 2018')
    expect(dates).toHaveLength(3)
  })

  it('renders event images with alt text', () => {
    render(<Events />)
    expect(screen.getByAltText('Summer Gala Night')).toBeInTheDocument()
    expect(screen.getByAltText('Wine & Dine Evening')).toBeInTheDocument()
    expect(screen.getByAltText('Beach Party')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Events className="custom-class" />)
    expect(screen.getByText('Events').closest('section')).toHaveClass('custom-class')
  })
})
