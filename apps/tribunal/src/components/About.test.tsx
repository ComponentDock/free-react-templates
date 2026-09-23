import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /founded in 1856/i })).toBeInTheDocument()
  })

  it('renders first paragraph', () => {
    render(<About />)
    expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders second paragraph', () => {
    render(<About />)
    expect(screen.getByText(/small river named duden/i)).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText('Law agency office')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/tribunal-about/600/400')
  })

  it('renders play button overlay', () => {
    const { container } = render(<About />)
    expect(container.querySelector('polygon')).toBeInTheDocument()
  })
})
