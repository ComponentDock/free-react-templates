import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Fitness Elements')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /bmi calculator/i })).toBeInTheDocument()
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })
})
