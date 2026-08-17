import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, CTA, and video-play image block', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(
      screen.getByRole('heading', { level: 1, name: 'We are a group of financial specialists' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See our services' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /financial specialist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
    expect(section).toBeInTheDocument()
  })
})
