import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with a highlighted word, play button, and Watch Video text', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We Are Creative Agency')
    expect(heading.querySelector('span')).toHaveClass('bg-brand')

    expect(screen.getByRole('button', { name: 'Watch video' })).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('has a cover background image with a dark overlay', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)

    const overlay = container.querySelector('[data-testid="hero-overlay"]')
    expect(overlay).toHaveClass('bg-black/40')
  })

  it('opens and closes the video lightbox', () => {
    render(<Hero />)

    expect(screen.queryByTitle('Video player')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Watch video' }))
    expect(screen.getByTitle('Video player')).toHaveAttribute(
      'src',
      expect.stringContaining('youtube.com/embed/'),
    )

    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByTitle('Video player')).not.toBeInTheDocument()
  })
})
