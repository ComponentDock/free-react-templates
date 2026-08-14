import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Coaches } from './Coaches'
import { COACHES } from '../data'

describe('Coaches', () => {
  it('renders the heading with four circular-photo coach cards', () => {
    render(<Coaches />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Coaches' })).toBeInTheDocument()

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(COACHES.length)

    COACHES.forEach((coach, i) => {
      expect(screen.getByRole('heading', { level: 3, name: coach.name })).toBeInTheDocument()
      expect(screen.getByText(coach.position)).toBeInTheDocument()
      const img = cards[i]!.querySelector('img')!
      expect(img).toHaveAttribute('src', coach.photo)
      expect(img).toHaveClass('rounded-full')
    })
  })

  it('renders social icon circles per coach', () => {
    render(<Coaches />)

    expect(screen.getAllByRole('link', { name: /Facebook/ })).toHaveLength(COACHES.length)
    expect(screen.getAllByRole('link', { name: /Instagram/ })).toHaveLength(COACHES.length)
  })
})
