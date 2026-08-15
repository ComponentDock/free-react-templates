import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Destinations } from './Destinations'
import { destinations } from '../data'

describe('Destinations', () => {
  it('renders the heading and six destination cards with photo, title, dates and price chip', () => {
    render(<Destinations />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Destinations' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
    for (const destination of destinations) {
      expect(screen.getByRole('heading', { level: 3, name: destination.title })).toBeInTheDocument()
      expect(screen.getByText(destination.dates)).toBeInTheDocument()
      expect(screen.getByText(destination.price)).toBeInTheDocument()
    }
  })
})
