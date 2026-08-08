import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the scripture quote, headline, subtext and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText(/Psalm 46:10/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find Rest for Your Soul')
    expect(screen.getByRole('link', { name: /Explore Retreats/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Begin Spiritual Direction' })).toBeInTheDocument()
  })

  it('shows a scroll indicator linking to the Daily Office section', () => {
    render(<Hero />)
    const cue = screen.getByRole('link', { name: /Enter the Stillness/ })
    expect(cue).toHaveAttribute('href', '#rhythm')
  })
})
