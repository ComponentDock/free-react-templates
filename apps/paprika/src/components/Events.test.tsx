import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Next Event')).toBeInTheDocument()
  })

  it('renders event title and description', () => {
    render(<Events />)
    expect(screen.getByText(/Grand Opening Night/)).toBeInTheDocument()
    expect(screen.getByText(/unforgettable evening/)).toBeInTheDocument()
  })

  it('renders View Details link', () => {
    render(<Events />)
    expect(screen.getByText('View Details →')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    render(<Events />)
    expect(document.getElementById('events')).toBeInTheDocument()
  })
})
