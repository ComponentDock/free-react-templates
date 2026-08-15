import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the two-line headline with the yellow-highlighted phrase and CTA', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings[0]).toHaveTextContent(/Physical activity/)
    expect(headings[1]).toHaveTextContent(/enhances positive energy!/)
    expect(screen.getByText('positive energy!')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join the Gym' })).toHaveAttribute('href', '#')
  })
})
