import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroImage } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline, copy and both CTAs over a photo with overlay', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: 'Keep faith always' })).toBeInTheDocument()
    expect(screen.getByText('Who Created Us')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Donate Now' })).toHaveAttribute('href', '#donate')

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', heroImage)
    expect(img).toHaveAttribute('alt', '')
  })

  it('applies a dark overlay over the background photo', () => {
    const { container } = render(<Hero />)

    const overlay = container.querySelector('.bg-\\[rgba\\(4\\,9\\,30\\,0\\.8\\)\\]')
    expect(overlay).not.toBeNull()
  })
})
