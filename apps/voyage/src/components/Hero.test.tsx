import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/It is Better to Travel Well Than to Arrive/)).toBeInTheDocument()
  })

  it('renders the Watch Video button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /watch video/i })).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    const img = screen.getByRole('presentation', { name: '' })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/voyage-hero/1920/1080')
  })

  it('has the hero section with correct id', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })
})
