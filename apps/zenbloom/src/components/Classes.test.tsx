import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders 6 class cards with titles', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /Vinyasa Flow/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Power Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hatha Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Yin Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ashtanga Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Restorative Yoga/i })).toBeInTheDocument()
  })

  it('shows trainer names', () => {
    render(<Classes />)
    expect(screen.getAllByText(/Sarah Lee/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Mike Chen/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Anna Patel/).length).toBeGreaterThan(0)
  })
})
