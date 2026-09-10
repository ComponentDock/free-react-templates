import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
    expect(screen.getByText(/Delicious Cake For Everyone/)).toBeDefined()
  })

  it('shows the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Menu')).toBeDefined()
  })

  it('has decorative watermark text', () => {
    render(<Hero />)
    expect(screen.getByText('Delicious', { selector: 'span' })).toBeDefined()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /assorted cakes/i })
    expect(img).toBeDefined()
  })
})
