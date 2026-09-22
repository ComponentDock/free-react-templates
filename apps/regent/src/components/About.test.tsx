import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT } from '../data'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(ABOUT.heading)
  })

  it('renders the paragraph', () => {
    render(<About />)
    expect(screen.getByText(ABOUT.paragraph)).toBeInTheDocument()
  })

  it('renders the play button overlay', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument()
  })

  it('renders the Watch Video link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: ABOUT.videoLabel })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about/i })
    expect(img).toHaveAttribute('src', ABOUT.image)
  })
})
