import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the section heading', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /Popular Classes/i })).toBeInTheDocument()
  })

  it('renders all three class cards', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /Artistic Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Traditional Hatha/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Yoga Therapy/i })).toBeInTheDocument()
  })

  it('renders trainer names and book now links', () => {
    render(<Classes />)
    const loriElements = screen.getAllByText('Lori Kennedy')
    expect(loriElements.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rebecca James')).toBeInTheDocument()
    const bookLinks = screen.getAllByText(/Book Now/i)
    expect(bookLinks).toHaveLength(3)
  })

  it('renders class images', () => {
    render(<Classes />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(3)
  })
})
