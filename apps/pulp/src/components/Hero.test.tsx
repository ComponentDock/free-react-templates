import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the Magazine eyebrow, the Pulp wordmark, and the UK Edition label', () => {
    render(<Hero />)

    expect(screen.getByText('Magazine')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Pulp' })).toBeInTheDocument()
    expect(screen.getByText('UK Edition')).toBeInTheDocument()
  })

  it('fills the wordmark letters with a background image and animates the section color', () => {
    const { container } = render(<Hero />)

    const wordmark = screen.getByRole('heading', { level: 1, name: 'Pulp' })
    expect(wordmark).toHaveClass('bg-clip-text')
    expect(wordmark).toHaveClass('text-transparent')
    expect(wordmark).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })

    expect(container.querySelector('section')).toHaveClass('animate-hero-cycle')
  })
})
