import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Feel The Music')
    expect(screen.getByText(/experience the sound/i)).toBeInTheDocument()
  })

  it('renders featured artist label', () => {
    render(<Hero />)
    expect(screen.getByText('Featured Artist')).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /explore now/i })).toHaveAttribute('href', '#tracks')
    expect(screen.getByRole('link', { name: /watch video/i })).toBeInTheDocument()
  })

  it('Explore Now links to tracks section', () => {
    render(<Hero />)

    const exploreBtn = screen.getByRole('link', { name: /explore now/i })
    expect(exploreBtn).toHaveAttribute('href', '#tracks')
  })

  it('Watch Video links to gallery section', () => {
    render(<Hero />)

    const watchBtn = screen.getByRole('link', { name: /watch video/i })
    expect(watchBtn).toHaveAttribute('href', '#gallery')
  })
})
