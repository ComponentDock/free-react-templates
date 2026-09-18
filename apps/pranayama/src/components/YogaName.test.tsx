import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { YogaName } from './YogaName'

describe('YogaName', () => {
  it('renders the section heading and subtitle', () => {
    render(<YogaName />)

    expect(screen.getByRole('heading', { level: 2, name: /Different Yoga/ })).toBeInTheDocument()

    expect(screen.getByText(/Explore the diverse world of yoga/)).toBeInTheDocument()
  })

  it('renders three yoga style cards', () => {
    render(<YogaName />)

    expect(screen.getByRole('heading', { level: 3, name: 'Hatha Yoga' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Power Yoga' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Ashtanga' })).toBeInTheDocument()
  })

  it('renders descriptions for each yoga style', () => {
    render(<YogaName />)

    expect(screen.getByText(/A gentle introduction to the most basic/)).toBeInTheDocument()
    expect(screen.getByText(/A fitness-based approach to vinyasa/)).toBeInTheDocument()
    expect(screen.getByText(/A rigorous and athletic style of yoga/)).toBeInTheDocument()
  })

  it('renders exactly three cards', () => {
    const { container } = render(<YogaName />)

    const cards = container.querySelectorAll('.rounded-xl')
    expect(cards.length).toBe(3)
  })
})
