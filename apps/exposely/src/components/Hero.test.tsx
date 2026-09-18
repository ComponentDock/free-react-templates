import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero title', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Golden Hour')
  })

  it('renders the hero description text', () => {
    render(<Hero />)
    expect(screen.getByText(/capturing the warmth/i)).toBeInTheDocument()
  })

  it('renders a background image container', () => {
    render(<Hero />)
    const container = screen.getByTestId('hero-bg')
    expect(container).toBeInTheDocument()
    expect(container.style.backgroundImage).toContain('picsum.photos')
  })

  it('renders as a full-height section', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: /hero/i })
    expect(section.className).toContain('min-h-screen')
  })

  it('contains a decorative divider line', () => {
    render(<Hero />)
    const divider = screen.getByTestId('hero-divider')
    expect(divider).toBeInTheDocument()
  })
})
