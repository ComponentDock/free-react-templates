import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, subtext, and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText('Award-Winning Creative Agency')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /We Create Bold Digital Experiences/i,
    )
    expect(screen.getByText(/We craft bold digital experiences/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Our Work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start a Project/i })).toBeInTheDocument()
  })

  it('renders the gradient span and the scroll indicator', () => {
    render(<Hero />)
    const gradient = screen.getByText('Bold Digital')
    expect(gradient).toHaveClass('text-gradient')
    expect(screen.getByText('Scroll')).toBeInTheDocument()
  })

  it('renders the stats row with four metrics', () => {
    render(<Hero />)
    const stats = [
      ['150+', 'Projects Delivered'],
      ['50+', 'Happy Clients'],
      ['12', 'Team Members'],
      ['8', 'Years Experience'],
    ] as const
    for (const [value, label] of stats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
