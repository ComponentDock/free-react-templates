import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the section title', () => {
    render(<Classes />)
    expect(screen.getByText(/what we can offer/i)).toBeInTheDocument()
  })

  it('renders the subtitle label', () => {
    render(<Classes />)
    expect(screen.getByText(/our classes/i)).toBeInTheDocument()
  })

  it('renders all 5 class cards', () => {
    render(<Classes />)
    const weightlifting = screen.getAllByText('Weightlifting')
    expect(weightlifting.length).toBeGreaterThanOrEqual(1)
    const cycling = screen.getAllByText('Indoor cycling')
    expect(cycling.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Kettlebell power')).toBeInTheDocument()
    expect(screen.getByText('Boxing')).toBeInTheDocument()
  })

  it('renders class categories', () => {
    render(<Classes />)
    const strength = screen.getAllByText('Strength')
    expect(strength.length).toBeGreaterThanOrEqual(1)
    const cardio = screen.getAllByText('Cardio')
    expect(cardio.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Training')).toBeInTheDocument()
  })

  it('has the classes section id', () => {
    const { container } = render(<Classes />)
    expect(container.querySelector('#classes')).toBeInTheDocument()
  })

  it('renders class images', () => {
    render(<Classes />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })
})
