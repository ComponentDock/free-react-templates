import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle and heading', () => {
    render(<Hero />)
    expect(screen.getByText('This is me')).toBeInTheDocument()
    expect(screen.getByText('Travor James')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Dickens Pattern/i)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /discover now/i })).toBeInTheDocument()
  })

  it('renders portrait image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Portrait illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
