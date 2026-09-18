import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /Our Events/i })).toBeInTheDocument()
  })

  it('renders all three event cards', () => {
    render(<Events />)
    expect(screen.getByText('Annual Charity Gala')).toBeInTheDocument()
    expect(screen.getByText('Community Cleanup Day')).toBeInTheDocument()
    expect(screen.getByText('Food Drive Marathon')).toBeInTheDocument()
  })

  it('renders Join Event links', () => {
    render(<Events />)
    const joinLinks = screen.getAllByRole('link', { name: /Join Event/i })
    expect(joinLinks).toHaveLength(3)
  })

  it('displays event venues', () => {
    render(<Events />)
    expect(screen.getByText('Grand Ballroom, City Hotel')).toBeInTheDocument()
    expect(screen.getByText('Central Park, Downtown')).toBeInTheDocument()
    expect(screen.getByText('Riverside Track')).toBeInTheDocument()
  })
})
