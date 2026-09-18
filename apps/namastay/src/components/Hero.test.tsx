import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Lose Yourself In Ambience & Atmosphere/)).toBeInTheDocument()
  })

  it('renders watch video text', () => {
    render(<Hero />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /play/i })).toBeInTheDocument()
  })
})
