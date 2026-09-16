import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the heading and paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(about.heading)
    about.paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument()
    })
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText(about.imageAlt)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', about.image)
  })

  it('renders the play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
