import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the artist name heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Jack Kalib')
  })

  it('renders the bio text', () => {
    render(<About />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the artist image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: 'Jack Kalib' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has the about section with correct id', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
