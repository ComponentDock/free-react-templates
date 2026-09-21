import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline with teal highlight', () => {
    render(<Hero />)
    expect(screen.getByText(/Improve your overall/)).toBeInTheDocument()
    expect(screen.getByText('health.')).toHaveClass('text-brand')
  })

  it('renders subheading text', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover holistic wellness/)).toBeInTheDocument()
  })

  it('renders play button with label', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /watch intro video/i })).toBeInTheDocument()
  })

  it('has background image styling', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
